import crypto from "node:crypto";
import { Router } from "express";
import {
  COOKIE_NAME,
  COOKIE_SAME_SITE,
  COOKIE_SECURE,
  MAX_FREE_COPIES,
  SESSION_TTL_DAYS,
} from "../constants.js";
import { AccessSession } from "../models/AccessSession.js";
import { Subscriber } from "../models/Subscriber.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { subscriberEmailValidation } from "../validations/subscriber.validation.js";

const getSessionTokenFromCookie = (req) => req.cookies?.[COOKIE_NAME];

function getCopyState(subscriber) {
  const copyCodeCount = subscriber?.copyCodeCount || 0;
  return {
    copyCodeCount,
    maxFreeCopies: MAX_FREE_COPIES,
    remainingCopies: Math.max(MAX_FREE_COPIES - copyCodeCount, 0),
    limitReached: copyCodeCount >= MAX_FREE_COPIES,
  };
}

async function findActiveSession(req) {
  const token = getSessionTokenFromCookie(req);
  if (!token) return null;

  const session = await AccessSession.findOne({ token }).exec();
  if (!session) return null;

  if (session.expiresAt.getTime() < Date.now()) return null;

  session.lastSeenAt = new Date();
  await session.save();
  return session;
}

async function createAccessSession(email) {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000);

  await AccessSession.create({
    token,
    email,
    expiresAt,
    lastSeenAt: new Date(),
  });

  return { token, expiresAt };
}

function setAccessCookie(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: COOKIE_SAME_SITE,
    secure: COOKIE_SECURE,
    path: "/",
    maxAge: SESSION_TTL_DAYS * 24 * 60 * 60 * 1000,
  });
}

export const accessRouter = () => {
  const router = Router();

  router.get(
    "/status",
    asyncHandler(async (req, res) => {
      const session = await findActiveSession(req);
      if (!session) {
        return res.json({
          allowed: false,
          subscribed: false,
          ...getCopyState(null),
        });
      }

      const subscriber = await Subscriber.findOne({ email: session.email }).exec();
      return res.json({
        allowed: Boolean(subscriber),
        subscribed: Boolean(subscriber),
        email: session.email,
        ...getCopyState(subscriber),
      });
    }),
  );

  router.post(
    "/email",
    asyncHandler(async (req, res) => {
      const parsed = subscriberEmailValidation.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          error: parsed.error.issues?.[0]?.message || "Invalid email.",
        });
      }

      const email = parsed.data.email.toLowerCase();
      const subscriber = await Subscriber.findOneAndUpdate(
        { email },
        {
          $setOnInsert: {
            email,
            copyCodeCount: 0,
            subscribedAt: new Date(),
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      ).exec();

      const session = await createAccessSession(email);
      setAccessCookie(res, session.token);

      return res.json({
        allowed: true,
        subscribed: true,
        email,
        ...getCopyState(subscriber),
      });
    }),
  );

  router.post(
    "/newsletter",
    asyncHandler(async (req, res) => {
      const parsed = subscriberEmailValidation.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          error: parsed.error.issues?.[0]?.message || "Invalid email.",
        });
      }

      const email = parsed.data.email.toLowerCase();
      const subscriber = await Subscriber.findOneAndUpdate(
        { email },
        {
          $setOnInsert: {
            email,
            copyCodeCount: 0,
            subscribedAt: new Date(),
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      ).exec();

      const session = await createAccessSession(email);
      setAccessCookie(res, session.token);

      return res.json({
        ok: true,
        success: true,
        message: "Thanks for subscribing!",
        data: { subscriber, ...getCopyState(subscriber) },
      });
    }),
  );

  router.post(
    "/copy",
    asyncHandler(async (req, res) => {
      const session = await findActiveSession(req);
      if (!session) {
        return res.status(401).json({
          success: false,
          message: "Enter your email to continue.",
          requiresEmail: true,
        });
      }

      const subscriber = await Subscriber.findOne({ email: session.email }).exec();
      if (!subscriber) {
        return res.status(401).json({
          success: false,
          message: "Enter your email to continue.",
          requiresEmail: true,
        });
      }

      if ((subscriber.copyCodeCount || 0) >= MAX_FREE_COPIES) {
        return res.status(403).json({
          success: false,
          message: "Create an account for unlimited component copies.",
          redirectTo: "/signup",
          ...getCopyState(subscriber),
        });
      }

      subscriber.copyCodeCount = (subscriber.copyCodeCount || 0) + 1;
      await subscriber.save();

      return res.json({
        success: true,
        message:
          getCopyState(subscriber).remainingCopies > 0
            ? `You have ${getCopyState(subscriber).remainingCopies} free component copies remaining.`
            : "This was your final free component copy. Create an account for unlimited access.",
        ...getCopyState(subscriber),
      });
    }),
  );

  return router;
};
