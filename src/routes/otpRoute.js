/** @format */

const express = require("express");
const { sendOTP, getOTP } = require("../controllers/otpControllers");
const router = new express.Router();

router.post("/sendOtp", sendOTP);

router.post("/getOtp", getOTP);

module.exports = router;
