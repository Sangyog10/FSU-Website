import mongoose from "mongoose";

const connectToMongo = () => {
  const url =
    "mongodb+srv://fsu:fsu123@cluster0.w4kxgv8.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected ");
    })
    .catch((error) => {
      console.log("could not connect hehe", error);
    });
};
export default connectToMongo;
