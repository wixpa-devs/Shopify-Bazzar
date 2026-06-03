import { Contact } from "../models/Contact.model.js";
import { sendContactEmail } from "../services/email.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { contactValidation } from "../validations/contact.validation.js";

export async function createContact(req, res) {
  const parsed = contactValidation.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message:
        parsed.error.issues?.[0]?.message || "Please check your message.",
    });
  }

  const contact = await Contact.create({
    ...parsed.data,
    email: parsed.data.email.toLowerCase(),
  });

  const emailDelivery = await sendContactEmail(contact);

  return res.status(201).json(
    new ApiResponse(
      201,
      { contact, emailDelivery },
      "Message sent successfully.",
    ),
  );
}

export async function getContacts(req, res) {
  const contacts = await Contact.find().sort({ createdAt: -1 }).limit(500).exec();

  return res.json(new ApiResponse(200, { contacts }, "Contacts loaded."));
}
