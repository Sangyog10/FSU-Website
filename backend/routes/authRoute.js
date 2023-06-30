import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { body, validationResult } from "express-validator";
const router = express.Router();

// Creating User
router.post(
  "/register",
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("The name must be at least 3 characters"),
    body("email", "Enter a valid email").isEmail(),
    body("password")
      .isLength({
        min: 8,
      })
      .withMessage("Password must be atleast 5 characters"),
  ],
  async (req, res) => {
    let { name, email, password, phone, bloodGroup, roll, answer } = req.body;
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(200).send({
          success: false,
          message: errors
            .array()
            .map((err) => err.msg)
            .join(" "),
        });
      }
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
      if (!roll) {
        res.send({
          message: "Roll No is required",
        });
      }
      if (!phone) {
        res.send({
          error: "Phone No is required",
        });
      }
      if (!bloodGroup) {
        res.send({
          message: "BloodGroup is required",
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
          bloodGroup,
          answer,
          roll,
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
  }
);

// Login route
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).send({
          success: false,
          message: errors
            .array()
            .map((err) => err.msg)
            .join(" "),
        });
      }
      let { email, password } = req.body;
      const user_data = await User.findOne({ email });
      // validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      if (!user_data) {
        return res.status(404).send({
          success: false,
          message: "Email is not registered",
        });
      }
      const match = await bcrypt.compare(password, user_data.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid password",
        });
      }
      // token
      const token = await jwt.sign(
        { _id: user_data._id },
        process.env.jwt_secret,
        { expiresIn: "7d" }
      );
      res.status(200).send({
        success: true,
        message: "Logged In Successfully",
        user: {
          name: user_data.name,
          email: user_data.email,
          phone: user_data.phone,
          bloodGroup: user_data.bloodGroup,
          roll: user_data.roll,
          role: user_data.role,
        },
        token,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  }
);
// Forgot password
router.post("/forgot-password", async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({
        message: "Email is required",
      });
    }
    if (!answer) {
      res.status(400).send({
        message: "Answer is required",
      });
    }
    if (!newPassword) {
      res.status(400).send({
        message: "New Password is required",
      });
    }
    // Check
    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await User.findByIdAndUpdate(user._id, { password: hashedPassword });
    res.status(200).send({
      success: true,
      message: "Password Changed Successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
    });
  }
});

// Get user
router.get("/getuser", requireSignIn, isAdmin, async (req, res) => {
  try {
    const userId = req.user.id;
    const loggedin_user = await User.findById(userId).select("-password");
    res.send(loggedin_user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Cannot get the user",
    });
  }
});
// protected user-route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
// protected admin-route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

export default router;
