// import mongoose from "mongoose";

// const connectToMongo = () => {
//   const uri =
//     "mongodb+srv://fsu:fsu@12345@cluster0.0qrd73k.mongodb.net/?retryWrites=true&w=majority";

//   mongoose
//     .connect(uri, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     })
//     .then(() => {
//       console.log("connected ");
//     })
//     .catch(() => {
//       console.log("could not connect ");
//     });
// };
// export default connectToMongo;
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
