import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
});

export default mongoose.model("suggestions", newSchema);
