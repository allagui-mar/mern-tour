import express from "express";

import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();
import { verifyAdmin } from "../utulis/verifyToken.js";
// update User
router.put("/:id", updateUser);
//delete User
router.delete("/:id", deleteUser);
// get single User
router.get("/:id", getSingleUser);
// get All Users
router.get("/", getAllUser);

export default router;
