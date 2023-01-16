/** @format */

import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePosts,
} from "../controllers/postControllers.js";
import auth from "../middleware/auth.js";

const postRouter = express.Router();

postRouter.get("/", auth, getFeedPosts);
postRouter.get("/:userId/posts", auth, getUserPosts);
postRouter.patch("/:id/like", auth, likePosts);

export default postRouter;
