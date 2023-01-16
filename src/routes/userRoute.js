/** @format */

import { Router } from "express";
import {
  userProfile,
  getAllUsers,
  createNewUser,
  login,
  logout,
  logoutAll,
  updatePassword,
} from "../controllers/userControllers.js";
import auth from "../middleware/auth.js";
const router = new Router();

//**********GET ROUTEs**********

router.get("/user/me", auth, userProfile);

router.get("/user/allUsers", getAllUsers);

//**********POST ROUTES**********
//new user
router.post("/newUser", createNewUser);

//login
router.post("/user/login", login);

//logout
router.post("/user/logout", auth, logout);

//logout all
router.post("/user/logoutAll", auth, logoutAll);

//**********Patch Routes**********
//Route For Updating Password When User Has Forgotten Password
router.patch("/user/changePassword", updatePassword);

export default router;
