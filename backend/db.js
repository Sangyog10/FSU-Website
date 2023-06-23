import mongoose from "mongoose";

const connectToMongo = () => {
  try {
    const connect = mongoose.connect(process.env.URI);
    console.log("Connected To Database");
  } catch (error) {
    console.log("Error in mongo");
  }
};
export default connectToMongo;
