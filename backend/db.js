import mongoose from "mongoose";

const connectToMongo = () => {
  const url =
    "mongodb+srv://somes:somes123@cluster0.bara8js.mongodb.net/?retryWrites=true&w=majority";

  mongoose
    .connect(url)
    .then(() => {
      console.log("connected ");
    })
    .catch(() => {
      console.log("could not connect hehe");
    });
};
export default connectToMongo;
