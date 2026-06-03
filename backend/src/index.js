import { createApp } from "./app.js";
import { connectDB } from "./db/connection.js";
import { PORT } from "./constants.js";
import { logStartupEnv } from "./envDebug.js";

async function main() {
  await connectDB();

  logStartupEnv();

  const app = createApp();

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `[backend] Listening on port ${PORT} (Mongo connected). Public URL must match CLIENT_URL for CORS.`,
    );
  });
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error("[backend] Failed to start:", err);
  process.exit(1);
});
