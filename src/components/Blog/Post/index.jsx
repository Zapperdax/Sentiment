import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import PostDescription from "../PostDescription";
import PostTitle from "../PostTitle";
import PostDate from "../PostDate";
import UserName from "../UserName";
import PostTags from "../PostTags";
import PostSkeleton from "../../PostSkeleton/PostSkeleton";

const Post = ({ data }) => {
  const styles = {
    wrapper: {
      gap: "15px",
    },
    content: {
      display: "flex",
      width: "100%",
      gap: "20px",
      flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    },
    postText: {
      flex: 1,
      gap: "10px",
    },
    postDetails: {
      padding: 0,
      display: "flex",
      flexDirection: { xs: "row", md: "column" },
      justifyContent: { xs: "space-between", md: "flex-start" },
      gap: "60px",
      order: { xs: 2, md: 0 },
    },
    tagContainer: {
      display: "flex",
      gap: "20px",
      paddingLeft: { sm: "0px", md: "105px" },
    },
  };
  console.log(data._id);
  return (
    <Stack sx={styles.wrapper}>
      <Box sx={styles.content}>
        <Box sx={styles.postDetails}>
          <PostDate date={data.createdAt} />
          <UserName userName={data.userName} />
        </Box>
        <Stack sx={styles.postText}>
          <PostTitle title={data.title} />
          <PostDescription description={data.blogBody} postId={data._id} />
        </Stack>
      </Box>
      <Box sx={styles.tagContainer}>
        {data.tags.map((tag) => (
          <PostTags key={tag} tag={tag} />
        ))}
      </Box>
    </Stack>
  );
};

export default Post;
