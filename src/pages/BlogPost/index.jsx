import { Box, Container, LinearProgress, Typography } from "@mui/material";
import React from "react";
import Post from "../../components/Blog/Post";
import { useDispatch, useSelector } from "react-redux";
import { allPosts, getPostById } from "../../features/blog/blogSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostTitle from "../../components/Blog/PostTitle";
import UserName from "../../components/Blog/UserName";
import PostDescription from "../../components/Blog/PostDescription";
import { useState } from "react";

const BlogPost = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const styles = {
    container: {
      padding: { xs: "2rem 2rem", md: "2rem 1rem" },
      color: "white",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    text: {
      color: "#fff",
      fontFamily: "Manrope",
      fontWeight: "400",
      lineHeight: "25px",
      fontSize: "16px",
    },
  };

  const post = useSelector(allPosts);
  const { token } = useSelector((state) => state.users.user);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getPostById({ token, id })).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Container maxWidth="md" sx={styles.container}>
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        post && (
          <>
            <PostTitle details={true} title={post?.title} />
            <Box>
              <Typography sx={styles.text}>
                Written by {post?.userName}
              </Typography>
              <Typography sx={styles.text}>On {post?.createdAt}</Typography>
            </Box>
            <PostDescription details={true} description={post?.blogBody} />
          </>
        )
      )}
    </Container>
  );
};

export default BlogPost;
