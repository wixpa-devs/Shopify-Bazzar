import mongoose from "mongoose";
import { config } from "./config.js";

let connectionPromise = null;

export async function connectMongo() {
  if (connectionPromise) return connectionPromise;

  connectionPromise = mongoose.connect(config.mongodbUri);

  return connectionPromise;
}
