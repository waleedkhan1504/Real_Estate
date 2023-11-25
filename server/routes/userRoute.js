import {
  getUser,
  getUserListings,
  updateUser,
} from "../controllers/userController.js";
import express from "express";
import { isSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.put("/update/:id", isSignIn, updateUser);
router.get("/:id", isSignIn, getUser);
router.get("/listings/:id", isSignIn, getUserListings);
export default router;
