import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    mode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      enum: ["BUY", "SELL"],
    },
  },
  {
    timestamps: true,
  },
);

const Order = new mongoose.model("Order", orderSchema);

export default Order;
