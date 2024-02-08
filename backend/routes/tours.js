import express from "express";

import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTours,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updatedTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utulis/verifyToken.js";
const router = express.Router();

// create new tour
router.post("/", createTour);
// update tour
router.put("/:id", updatedTour);
//delete tour
router.delete("/:id", deleteTour);
// get single tour
router.get("/:id", getSingleTour);
// get All Tours
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
// get featured tours
router.get("/search/getFeaturedTours", getFeaturedTours);
// get tour counts
router.get("/search/getTourCount", getTourCount);
export default router;
