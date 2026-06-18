import Order from "../models/OrdersModels.js";

export async function insertOrder(req, res) {
  let { name, qty, price, mode } = req.body;
  let newOrder = new Order({ name, qty, price, mode });
  let result = await newOrder.save();
  if (result) {
    res.status(201).json({
      message: "order created successfully",
    });
  } else {
    res.status(400).json({
      message: "Failed to create order",
    });
  }
}
