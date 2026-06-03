import mongoose from "mongoose";
import { MONGO_URL, MONGODB_DB_NAME } from "../constants.js";

let connectionPromise = null;

export async function connectDB() {
  if (connectionPromise) return connectionPromise;

  mongoose.set("strictQuery", true);

  connectionPromise = mongoose
    .connect(MONGO_URL, { dbName: MONGODB_DB_NAME })
    .then((connection) => {
      console.log(`[backend] MongoDB connected: ${connection.connection.host}`);
      return connection;
    })
    .catch((error) => {
      connectionPromise = null;
      console.error("[backend] MongoDB connection failed:", error.message);
      throw error;
    });

  return connectionPromise;
}
