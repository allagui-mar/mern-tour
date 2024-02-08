import User from "../models/User.js";
// create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: " failed to created.try again" });
  }
};
// update User

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: " failed to update.try again" });
  }
};
// delete  User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      sucess: true,
      message: "User successfully deleted",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: " failed not deleted.try again" });
  }
};

// get single User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "success",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: " not found",
    });
  }
};

// get all Users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "all Users",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: " Users not found" });
  }
};
