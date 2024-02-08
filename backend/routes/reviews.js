import express from "express";
import { createReview } from "../controllers/reviewsController.js";
import { verifyUser } from "../utulis/verifyToken.js";

const router = express.Router();
router.post("/:tourId", createReview);
export default router;
