import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Drawer,
  LinearProgress,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Post from "../../components/Blog/Post";
import BlogSidebar from "../../components/Blog/BlogSidebar";
import { useDispatch, useSelector } from "react-redux";
import { allPosts, fetchBlogPosts } from "../../features/blog/blogSlice";
import PostSkeleton from "../../components/PostSkeleton/PostSkeleton";
import CreatePost from "../../components/Blog/CreatePost/CreatePost";

const Blog = () => {
  const { token } = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const blogPosts = useSelector(allPosts);
  const [loading, setLoading] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const ar = [1, 2, 3, 4, 5, 6];

  const is700 = useMediaQuery("(max-width:700px)");

  const openModal = () => {
    setIsPostModalOpen(true);
  };
  const closeModal = () => {
    setIsPostModalOpen(false);
  };

  const fetchPosts = () => {
    setLoading(true);
    dispatch(fetchBlogPosts(token)).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        color: "white",
        position: "relative",
        px: is700 ? "2rem" : "6rem",
        pt: "3rem",
      }}
    >
      <BlogSidebar openPostModal={openModal} />
      <Box
        sx={{
          marginLeft: { lg: "65px" },
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        {loading
          ? ar.map((item, index) => <PostSkeleton key={`${item} + ${index}`} />)
          : blogPosts.length > 0 &&
            blogPosts?.map((post) => {
              return <Post key={post._id} data={post} />;
            })}
      </Box>
      {isPostModalOpen && (
        <CreatePost open={isPostModalOpen} onClose={closeModal} />
      )}
    </Box>
  );
};

export default Blog;
