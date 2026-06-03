import { MAX_FREE_COPIES } from "../constants.js";
import { Subscriber } from "../models/Subscriber.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { subscriberValidation } from "../validations/subscriber.validation.js";

export async function createSubscriber(req, res) {
  const parsed = subscriberValidation.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: parsed.error.issues?.[0]?.message || "Invalid email address.",
    });
  }

  const email = parsed.data.email.toLowerCase();
  const subscriber = await Subscriber.findOneAndUpdate(
    { email },
    {
      $setOnInsert: {
        email,
        copyCodeCount: parsed.data.copyCodeCount || 0,
        subscribedAt: new Date(),
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  ).exec();

  const remainingCopies = Math.max(
    MAX_FREE_COPIES - (subscriber.copyCodeCount || 0),
    0,
  );

  return res.status(201).json(
    new ApiResponse(
      201,
      { subscriber, remainingCopies, maxFreeCopies: MAX_FREE_COPIES },
      "Thanks for subscribing!",
    ),
  );
}

export async function getSubscribers(req, res) {
  const subscribers = await Subscriber.find()
    .sort({ createdAt: -1 })
    .limit(500)
    .exec();

  return res.json(new ApiResponse(200, { subscribers }, "Subscribers loaded."));
}
