import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import Notices from "../models/noticeModel.js";
const router = express.Router();

// create notice
router.post("/create-notice", requireSignIn, isAdmin, async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res.status(401).send({
        message: "Title is required",
      });
    }
    const existingNotice = await Notices.findOne({ title });
    if (existingNotice) {
      return res.status(200).send({
        success: true,
        message: "Notice already exists",
      });
    }
    const notice = await Notices.create({ title, description });
    res.status(201).send({
      success: true,
      message: "Notice Created Successfully ",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error in creating notice",
      error,
    });
  }
});

export default router;
