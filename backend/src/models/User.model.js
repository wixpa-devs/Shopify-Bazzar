import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenGenerator.js";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 60 },
    lastName: { type: String, trim: true, maxlength: 60, default: "" },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: { type: String, trim: true, maxlength: 30, default: "" },
    country: { type: String, trim: true, maxlength: 80, default: "" },
    state: { type: String, trim: true, maxlength: 80, default: "" },
    city: { type: String, trim: true, maxlength: 80, default: "" },
    password: { type: String, required: true, select: false },
    role: { type: String, trim: true, default: "user" },
    refreshToken: { type: String, select: false, default: "" },
  },
  { timestamps: true },
);

userSchema.virtual("name").get(function getName() {
  return [this.firstName, this.lastName].filter(Boolean).join(" ");
});

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  return next();
});

userSchema.methods.isPasswordCorrect = function isPasswordCorrect(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function createAccessToken() {
  return generateAccessToken(this);
};

userSchema.methods.generateRefreshToken = function createRefreshToken() {
  return generateRefreshToken(this);
};

export const User = mongoose.model("User", userSchema, "users");
