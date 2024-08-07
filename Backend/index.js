import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import courseRoute from "./routes/courseRoute.js";
import topicRoute from "./routes/topicRoute.js";
import questionRoute from "./routes/questionRoute.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// app.use("/courses", courseRoute);
app.use("/topics", topicRoute);
app.use("/questions", questionRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connecting to DB");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
