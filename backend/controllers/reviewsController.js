import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

export const createReview = async (req, res) => {
  const tourId = req.params.Id;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    }).exec();
    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to submit",
      error: err.message,
    });
  }
};
