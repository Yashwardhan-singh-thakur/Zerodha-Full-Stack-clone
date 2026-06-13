import mongoose from "mongoose";
import { Schema } from "mongoose";

import connectDb from "../config/db.js";
connectDb();

const orderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const Order = new mongoose.model("Order", orderSchema);

export default Order;
