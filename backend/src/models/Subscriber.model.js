import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    copyCodeCount: { type: Number, default: 0, min: 0 },
    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Subscriber = mongoose.model(
  "Subscriber",
  subscriberSchema,
  "subscribers",
);
