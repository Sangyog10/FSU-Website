import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const router = express.Router();

// Creating User
router.post("/register", async (req, res) => {
  let { name, email, password, phone, address, answer } = req.body;
  try {
    if (!name) {
      res.send({
        message: "Name is required",
      });
    }
    if (!password) {
      res.send({
        message: "Password is required",
      });
    }
    if (!email) {
      res.send({
        message: "Email is required",
      });
    }
    if (!phone) {
      res.send({
        error: "Phone No is required",
      });
    }
    if (!address) {
      res.send({
        message: "Address is required",
      });
    }
    if (!answer) {
      res.send({
        message: "Your birth place is required",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);
    password = secPass;
    if (!(await User.findOne({ email }))) {
      const user = await User.create({
        name,
        email,
        password,
        phone,
        address,
        answer,
      });

      res.status(201).send({
        success: true,
        message: "User Registered Successfully",
        user,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "A user with this email already exists",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
});

export default router;
