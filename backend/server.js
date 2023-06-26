import express from "express";
import dotenv from "dotenv";
import connectToMongo from "./db.js";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import suggestionRoute from "./routes/suggestionRoute.js";

const app = express();

// Config env
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());

// Connect to mongo
connectToMongo();

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/suggestion", suggestionRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
