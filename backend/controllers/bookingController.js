import Booking from "../models/Booking.js";
// ceate new Booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "your Tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({
      success: false,
      message: "internal Server ",
      err,
    });
  }
};
// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "successefull",
      data: book,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "internal server error",
    });
  }
};

// get All booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.findById();
    res.status(200).json({
      success: true,
      message: "successefull",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
