import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
    },
    company: { type: String, trim: true, maxlength: 120, default: "" },
    subject: { type: String, trim: true, maxlength: 180, default: "Website inquiry" },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Contact = mongoose.model("Contact", contactSchema, "contacts");
