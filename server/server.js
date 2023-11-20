import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import { configDotenv } from "dotenv";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
//import listingRoutes from "./routes/listingRoute.js";
const app = express();

configDotenv();
app.use(cors());
connectDB();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
//app.use("/api/listing", listingRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`APP IS LISTENING TO THE PORT ${PORT}`);
});
