/** @format */

import User from "../models/userModel.js";

export const userProfile = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(400).send({ "ERROR:": "No Users In Database" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const createNewUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send(req.user);
  } catch (err) {
    res.status(500).send();
  }
};

export const updatePassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ "ERROR : ": "No User Found" });
    }
    user.password = req.body.password;
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
