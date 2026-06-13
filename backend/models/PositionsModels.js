import mongoose from "mongoose";
import { Schema } from "mongoose";

import connectDb from "../config/db.js";
connectDb();

const positionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Position = new mongoose.model("Position", positionSchema);

export default Position;
