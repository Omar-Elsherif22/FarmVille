import mongoose from "mongoose";

export async function connectDB() {
  try {
    // prefer explicit IPv4 host for local dev if needed (or use process.env.CONNECTION_URL for Atlas)
    const uri = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/FarmVille";

    // helpful options and sensible timeouts
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    };

    mongoose.connection.on("connecting", () => console.log("Mongoose: connecting"));
    mongoose.connection.on("connected", () => console.log("Mongoose: connected"));
    mongoose.connection.on("error", (e) => console.error("Mongoose error:", e));
    mongoose.connection.on("disconnected", () => console.log("Mongoose: disconnected"));

    await mongoose.connect(uri, opts);
    console.log("DB connected successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    // rethrow so callers (startup) can stop the server instead of continuing
    throw err;
  }
}