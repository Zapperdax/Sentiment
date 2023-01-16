/** @format */

import User from "../models/userModel";
const OTP = require("../models/otpModel");

const generateOTP = require("../utils/generateOTP");
const sendOTP = require("../utils/sendOTP");

export const sendOTP = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ "ERROR : ": "No Such User" });
    }
    const otp = await generateOTP();
    await sendOTP(otp, email);
    OTP.findOneAndUpdate(
      { email },
      { otp },
      { upsert: true, new: true },
      (err, result) => {
        if (err) {
          return res.status(400).send(err.message);
        }
        res.json({
          message: "OTP Saved",
          result,
        });
      }
    );
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getOTP = async (req, res) => {
  try {
    const otp = await OTP.findOne({ email: req.body.email });
    if (!otp) {
      return res.status(400).send();
    }
    res.send(otp);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
