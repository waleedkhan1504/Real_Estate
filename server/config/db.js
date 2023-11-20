import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("connection successfull");
    return db;
  } catch (error) {
    console.log({ error: "unable to connect" });
  }
};

export default connectDB;
