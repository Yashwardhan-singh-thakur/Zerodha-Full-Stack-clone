import Position from "../models/PositionsModels.js";

export async function showAllPositions(req, res) {
  let positions = await Position.find();
  console.log(positions);
  res.status(200).json(positions);
}
