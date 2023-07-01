import { model } from "mongoose";
import Notice from "../models/noticeModel.js";
import express from "express";
const router = express.Router();
router.get("/notices", async (req, res) => {
  try {
    let notice = await Notice.find();
    if (notice) {
      res.status(201).json({ notice });
    } else {
      res.status(401).json({ message: "Something went wrong !" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
