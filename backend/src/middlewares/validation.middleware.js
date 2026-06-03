import { ApiError } from "../utils/ApiError.js";

export const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse(req.body);

  if (!parsed.success) {
    const message =
      parsed.error.issues?.[0]?.message || "Please check your input and try again.";
    return next(new ApiError(400, message, parsed.error.issues));
  }

  req.body = parsed.data;
  return next();
};
