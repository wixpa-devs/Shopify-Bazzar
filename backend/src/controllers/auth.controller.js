import jwt from "jsonwebtoken";
import {
  COOKIE_SAME_SITE,
  COOKIE_SECURE,
  IS_PRODUCTION,
  JWT_REFRESH_SECRET,
  REFRESH_COOKIE_NAME,
} from "../constants.js";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateAuthTokens, generateAccessToken } from "../utils/tokenGenerator.js";
import {
  loginValidation,
  signupValidation,
} from "../validations/auth.validation.js";

const toPublicUser = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  name: user.name,
  email: user.email,
  role: user.role,
});

const validationMessage = (error) =>
  error.issues?.[0]?.message || "Please check your input and try again.";

const refreshCookieOptions = {
  httpOnly: true,
  secure: COOKIE_SECURE,
  sameSite: COOKIE_SAME_SITE,
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

function normalizeSignupBody(body = {}) {
  if (body.firstName) return body;

  const fullName = String(body.name || "").trim();
  if (!fullName) return body;

  const [firstName, ...lastNameParts] = fullName.split(/\s+/);
  return {
    ...body,
    firstName,
    lastName: lastNameParts.join(" "),
  };
}

export async function register(req, res) {
  const parsed = signupValidation.safeParse(normalizeSignupBody(req.body));
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: validationMessage(parsed.error),
    });
  }

  const { firstName, lastName, password, phoneNumber, country, state, city } =
    parsed.data;
  const email = parsed.data.email.toLowerCase();

  const existingUser = await User.findOne({ email }).exec();
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "An account with this email already exists.",
    });
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    country,
    state,
    city,
    password,
    role: "user",
  });

  const { accessToken, refreshToken } = generateAuthTokens(user);
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions);

  return res.status(201).json({
    ...new ApiResponse(
      201,
      {
      user: toPublicUser(user),
        token: accessToken,
        accessToken,
        refreshToken,
      },
      "Account created successfully.",
    ),
  });
}

export async function login(req, res) {
  const parsed = loginValidation.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: validationMessage(parsed.error),
    });
  }

  const email = parsed.data.email.toLowerCase();
  const user = await User.findOne({ email }).select("+password +refreshToken").exec();

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const passwordMatches = await user.isPasswordCorrect(parsed.data.password);
  if (!passwordMatches) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password.",
    });
  }

  const { accessToken, refreshToken } = generateAuthTokens(user);
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions);

  return res.json({
    ...new ApiResponse(
      200,
      {
      user: toPublicUser(user),
        token: accessToken,
        accessToken,
        refreshToken,
      },
      "Logged in successfully.",
    ),
  });
}

export async function refreshToken(req, res) {
  const incomingRefreshToken =
    req.cookies?.[REFRESH_COOKIE_NAME] || req.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh token is required.");
  }

  const decoded = jwt.verify(incomingRefreshToken, JWT_REFRESH_SECRET);
  const user = await User.findById(decoded.id).select("+refreshToken").exec();

  if (!user || user.refreshToken !== incomingRefreshToken) {
    throw new ApiError(401, "Invalid refresh token.");
  }

  const accessToken = generateAccessToken(user);
  return res.json(
    new ApiResponse(
      200,
      {
        user: toPublicUser(user),
        token: accessToken,
        accessToken,
      },
      "Access token refreshed.",
    ),
  );
}

export async function logout(req, res) {
  const incomingRefreshToken =
    req.cookies?.[REFRESH_COOKIE_NAME] || req.body?.refreshToken;

  if (incomingRefreshToken) {
    const user = await User.findOne({ refreshToken: incomingRefreshToken })
      .select("+refreshToken")
      .exec();
    if (user) {
      user.refreshToken = "";
      await user.save({ validateBeforeSave: false });
    }
  }

  res.clearCookie(REFRESH_COOKIE_NAME, {
    httpOnly: true,
    secure: IS_PRODUCTION,
    sameSite: COOKIE_SAME_SITE,
    path: "/",
  });

  return res.json(new ApiResponse(200, {}, "Logged out successfully."));
}
