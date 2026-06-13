import mongoose from "mongoose";
import { Schema } from "mongoose";

import connectDb from "../config/db.js";
connectDb();

const holdingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = new mongoose.model("Holding", holdingSchema);

export default Holding;
