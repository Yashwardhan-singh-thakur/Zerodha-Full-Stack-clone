import express from "express";

import { showAllPositions } from "../controllers/positionsController.js";
const router = express.Router({ mergeParams: true });

// showAllListing & post new listing routers.
router.route("/").get(showAllPositions);

export default router;
