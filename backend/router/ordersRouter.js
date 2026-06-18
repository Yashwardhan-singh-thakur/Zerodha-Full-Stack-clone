import express from "express";

import { insertOrder } from "../controllers/orderController.js";
import WrapAsync from "../utils/WrapAsync.js";
import { validateOrder } from "../utils/validation.js";

const router = express.Router({ mergeParams: true });

router.post("/", validateOrder, WrapAsync(insertOrder));

export default router;
