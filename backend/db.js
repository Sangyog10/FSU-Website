import mongoose from "mongoose";

const connectToMongo = () => {
  const url = "mongodb+srv://subash:SKY123@cluster0.nx5guq1.mongodb.net/";
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
