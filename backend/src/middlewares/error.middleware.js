import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export function notFoundHandler(req, res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

export function errorHandler(err, req, res, next) {
  void next;

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal server error";
  let errors = err.errors || [];

  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid authentication token.";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Authentication token expired.";
  }

  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = "Validation failed.";
    errors = Object.values(err.errors).map((error) => error.message);
  }

  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyPattern || {})[0] || "field";
    message = `An entry with this ${field} already exists.`;
  }

  if (statusCode >= 500) {
    console.error("[backend] Request error:", err);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}
