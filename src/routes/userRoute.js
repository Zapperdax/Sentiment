/** @format */

const express = require("express");
const {
  userProfile,
  getAllUsers,
  createNewUser,
  login,
  logout,
  logoutAll,
  updatePassword,
} = require("../controllers/userControllers");
const router = new express.Router();
const auth = require("../middleware/auth");

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

module.exports = router;
