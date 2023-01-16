/** @format */

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error("PLEASE AUTHENTICATE");
    }
    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
};

export default auth;
