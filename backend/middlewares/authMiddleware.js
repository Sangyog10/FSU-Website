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
// Admin access

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access",
      });
    }
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
