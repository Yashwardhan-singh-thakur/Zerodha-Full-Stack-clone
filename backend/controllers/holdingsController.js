import Holding from "../models/HoldingsModels.js";

export async function showAllHoldings(req, res) {
  try {
    let holdings = await Holding.find();
    res.status(200).json(holdings);
  } catch (err) {
    console.log(err.message);
  }
}
