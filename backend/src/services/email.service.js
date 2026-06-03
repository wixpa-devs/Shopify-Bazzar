import nodemailer from "nodemailer";
import {
  CONTACT_RECEIVER_EMAIL,
  EMAIL_PASSWORD,
  EMAIL_USER,
} from "../constants.js";
import { ApiError } from "../utils/ApiError.js";

let transporter = null;
const senderEmail = EMAIL_USER || CONTACT_RECEIVER_EMAIL;
const normalizeAppPassword = (password) => password.replace(/\s+/g, "");

function getTransporter() {
  if (transporter) return transporter;

  if (EMAIL_USER && EMAIL_PASSWORD) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 25000,
      auth: {
        user: EMAIL_USER,
        pass: normalizeAppPassword(EMAIL_PASSWORD),
      },
    });
  }

  return transporter;
}

export async function sendContactEmail(contact) {
  const mailer = getTransporter();

  if (!mailer || !CONTACT_RECEIVER_EMAIL) {
    throw new ApiError(
      503,
      "Contact email is not configured. Add EMAIL_USER, EMAIL_PASSWORD, and CONTACT_RECEIVER_EMAIL in backend/.env, then restart the backend.",
    );
  }

  try {
    await mailer.sendMail({
      from: `"Shopify Component Library" <${senderEmail}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: contact.email,
      subject: `New contact inquiry: ${contact.subject || "Website inquiry"}`,
      text: [
        `Name: ${contact.name}`,
        `Email: ${contact.email}`,
        `Company: ${contact.company || "N/A"}`,
        `Subject: ${contact.subject || "Website inquiry"}`,
        "",
        contact.message,
      ].join("\n"),
      html: `
        <h2>New contact inquiry</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Company:</strong> ${contact.company || "N/A"}</p>
        <p><strong>Subject:</strong> ${contact.subject || "Website inquiry"}</p>
        <p style="white-space:pre-line;">${contact.message}</p>
      `,
    });
  } catch (error) {
    const message = String(error?.message || "");
    const code = String(error?.code || "");

    if (
      code === "ETIMEDOUT" ||
      code === "EACCES" ||
      code === "ECONNECTION" ||
      message.toLowerCase().includes("timeout")
    ) {
      throw new ApiError(
        502,
        "Email service cannot reach Gmail SMTP. Allow outbound smtp.gmail.com on port 587, then restart the backend.",
      );
    }

    if (code === "EAUTH" || message.includes("535")) {
      throw new ApiError(
        502,
        "Gmail rejected the email credentials. Use a Gmail App Password, not your normal Gmail password.",
      );
    }

    throw new ApiError(502, `Email delivery failed: ${message || "Unknown error"}`);
  }

  return { sent: true, skipped: false };
}
