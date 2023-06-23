import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protected Route token base

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.jwt_secret
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error.message);
    res.status();
  }
};
