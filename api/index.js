import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MOngoDb!");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRoute);
