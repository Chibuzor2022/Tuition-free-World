// backend/routes/authRoutes.js
import express from "express";
import { loginUser, logoutUser } from "../controllers/authController.js";

const router = express.Router();

// @route   POST /api/auth/login
router.post("/login", loginUser);

// @route   POST /api/auth/logout
router.post("/logout", logoutUser);

export default router;
