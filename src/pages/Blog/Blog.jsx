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

const Blog = () => {
  const { token } = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const blogPosts = useSelector(allPosts);
  const [loading, setLoading] = useState(false);

  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");

  const fetchPosts = () => {
    setLoading(true);
    dispatch(fetchBlogPosts(token)).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
      <BlogSidebar />
      <Box
        sx={{
          marginLeft: { lg: "65px" },
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        {loading ? (
          <LinearProgress color="secondary" />
        ) : (
          blogPosts.length > 0 &&
          blogPosts?.map((post) => {
            return <Post key={post._id} data={post} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default Blog;
