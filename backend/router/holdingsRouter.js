import express from "express";

import { showAllHoldings } from "../controllers/holdingsController.js";
const router = express.Router({ mergeParams: true });

// showAllListing & post new listing routers.
router.route("/").get(showAllHoldings);

export default router;
