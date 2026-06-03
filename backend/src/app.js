import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import { accessRouter } from "./routes/access.routes.js";
import { shopifyRouter } from "./routes/shopify.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { subscriberRouter } from "./routes/subscriber.routes.js";
import { contactRouter } from "./routes/contact.routes.js";
import { isOriginAllowed } from "./constants.js";
import { logCorsDecision } from "./envDebug.js";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware.js";

export function createApp() {
  const app = express();

  app.set("trust proxy", 1);

  app.use(
    cors({
      origin(origin, callback) {
        if (!origin) {
          logCorsDecision(origin, true);
          return callback(null, true);
        }
        const allowed = isOriginAllowed(origin);
        logCorsDecision(origin, allowed);
        if (allowed) return callback(null, true);
        callback(null, false);
      },
      credentials: true,
    }),
  );

  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
    }),
  );

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 100,
      standardHeaders: true,
      legacyHeaders: false,
    }),
  );

  app.use(express.json({ limit: "50kb" }));
  app.use(cookieParser());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ ok: true });
  });

  app.use("/api/access", accessRouter());
  app.use("/api/shopify", shopifyRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/subscribers", subscriberRouter);
  app.use("/api/contact", contactRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
