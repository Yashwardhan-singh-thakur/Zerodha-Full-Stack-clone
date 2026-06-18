import express from "express";

import { signUp, logIn } from "../controllers/usersControllers.js";
import WrapAsync from "../utils/WrapAsync.js";
import { validateUser } from "../utils/validation.js";

const router = express.Router({ mergeParams: true });

router.post("/signup", validateUser, WrapAsync(signUp));

router.post("/login", WrapAsync(logIn));

export default router;
