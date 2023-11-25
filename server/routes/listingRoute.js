import express from "express";
import { isSignIn } from "../middlewares/authMiddleware.js";
import {
  createListing,
  deleteListing,
  getListing,
  getListings,
  updateListing,
} from "../controllers/listingController.js";

const router = express.Router();
router.post("/create", isSignIn, createListing);
router.put("/update/:id", isSignIn, updateListing);
router.delete("/delete/:id", isSignIn, deleteListing);
router.get("/getListing/:id", getListing);
router.get("/getAllListing", getListings);
export default router;
