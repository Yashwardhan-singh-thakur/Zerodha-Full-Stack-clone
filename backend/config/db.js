import mongoose from "mongoose";
import { mongoUrl } from "./index.js";

// console.log(mongoUrl);

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("mongoDb is connected succesfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDb;
