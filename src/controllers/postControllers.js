/** @format */

import User from "../models/userModel.js";
import Post from "../models/postModel.js";

const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      userPicturePath: user.picturePath,
      location: user.location,
      description,
      picturePath,
      like: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();

    res.send(201).json(post);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const likePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export { getFeedPosts, getUserPosts, likePosts, createPost };
