import mongoose from "mongoose";
import { Schema } from "mongoose";

const holdingSchema = new Schema(
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
      min: 0,
    },

    avg: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    net: {
      type: String,
      required: true,
      trim: true,
    },

    day: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Holding = new mongoose.model("Holding", holdingSchema);

export default Holding;
