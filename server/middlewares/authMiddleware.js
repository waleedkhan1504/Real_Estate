import Jwt from "jsonwebtoken";
export const isSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    Jwt.decode = token[1];
    const decode = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(422).send("unAuthorized Acess token required");
    console.log("unAuthorized Acess token required");
  }
};
