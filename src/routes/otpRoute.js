/** @format */

import { Router } from "express";
import { sendOtpController, getOTP } from "../controllers/otpControllers.js";
const router = new Router();

router.post("/sendOtp", sendOtpController);

router.post("/getOtp", getOTP);

export default router;
