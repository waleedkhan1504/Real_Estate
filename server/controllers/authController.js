import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import mongoose from "mongoose";
export const registerController = async (req, res) => {
  const exisitingUser = await userModel.findOne({ email: req.body.email });
  //validation
  if (exisitingUser) {
    return res.status(200).send({
      success: false,
      message: "User ALready exists",
    });
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  //rest data
  const user = new userModel(req.body);
  await user.save();
  return res.status(201).send({
    success: true,
    message: "User Registerd Successfully",
    user,
  });
};

///login Controllers

export const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(500)
        .send({ success: false, message: "Email Not found" });
    }

    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword) {
      return res.status(401).send({ success: false, message: "invalid creds" });
    }
    const token = Jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    return res.status(200).send({
      success: true,
      message: "user login successfully",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "unable to Login",
    });
  }
};
