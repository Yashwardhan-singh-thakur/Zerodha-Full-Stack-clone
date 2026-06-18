import mongoose from "mongoose";
import { Schema } from "mongoose";

const positionSchema = new Schema(
  {
    product: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

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

    isLoss: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Position = new mongoose.model("Position", positionSchema);

export default Position;
