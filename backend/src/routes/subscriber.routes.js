import { Router } from "express";
import {
  createSubscriber,
  getSubscribers,
} from "../controllers/subscriber.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const subscriberRouter = Router();

subscriberRouter.post("/", asyncHandler(createSubscriber));
subscriberRouter.get("/", requireAuth, asyncHandler(getSubscribers));
