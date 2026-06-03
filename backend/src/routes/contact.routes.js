import { Router } from "express";
import {
  createContact,
  getContacts,
} from "../controllers/contact.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const contactRouter = Router();

contactRouter.post("/", asyncHandler(createContact));
contactRouter.get("/", requireAuth, asyncHandler(getContacts));
