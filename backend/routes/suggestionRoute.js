import express from "express";
import collection from "../models/suggestModel.js";

const router = express.Router();

//suggestion box
router.post("/suggestion", async (req, res) => {
  const { msg } = req.body;
  const data = {
    msg: msg,
  };
  await collection.insertMany([data]);
});

export default router;
