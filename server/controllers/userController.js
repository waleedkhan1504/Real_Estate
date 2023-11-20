import userModel from "../models/userModel.js";

import bcrypt from "bcrypt";

export const updateUser = async (req, res, next) => {
  try {
    console.log(req?.user.userId, req.params.id);
    if (req?.user?.userId !== req.params.id)
      return res.status(422).send("You can only update your own account!");
    // console.log(req.params.id);
    const hashedPassword = req.body.password
      ? await bcrypt.hash(req.body.password, 10)
      : undefined;

    const user = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
          photo: req.body.photo,
        },
      },
      { new: true }
    );

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);

    if (!user)
      return res.status(500).send({
        message: "user not found",
      });

    const { password: pass, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
/*
export const getUserListings = async (req, res, next) => {
  if (req.user.userId === req.params.id) {
    try {
      const listings = await Listin.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return res
      .status(500)
      .send({ message: "You can only view your own listings!" });
  }
};
*/
