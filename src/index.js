/** @format */

import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

import userRoute from "./routes/userRoute.js";
import otpRoute from "./routes/otpRoute.js";

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(json());
app.use(userRoute);
app.use(otpRoute);

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGODB_URL, () => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
    console.log("Database Connected!");
  });
});
