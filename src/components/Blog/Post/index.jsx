import { Box, Stack } from "@mui/material";
import React from "react";
import PostDescription from "../PostDescription";
import PostTitle from "../PostTitle";
import PostDate from "../PostDate";
import UserName from "../UserName";
import PostTags from "../PostTags";

const Post = () => {
  const styles = {
    wrapper: {
      height: { xs: "440px", md: "260px" },
      //   width: { xs: "342px", md: "966px" },
    },
    content: {
      display: "flex",
      width: "100%",
      gap: "17px",
      flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    },
    postText: {
      //   width: { xs: "342px", md: "876px" },
      height: { xs: "440px", md: "217px" },
      flex: 1,
      gap: "19px",
    },
    postDetails: {
      padding: 0,
      display: "flex",
      flexDirection: { xs: "row", md: "column" },
      justifyContent: { xs: "space-between", md: "flex-start" },
      //   alignItems: "flex-start",
      //   width: { xs: "100%", md: "73px" },
      gap: "60px",
      order: { xs: 2, md: 0 },
    },
  };
  return (
    <Stack sx={styles.wrapper}>
      <Box sx={styles.content}>
        <Box sx={styles.postDetails}>
          <PostDate date="12 May" />
          <UserName userName="@someUser" />
        </Box>
        <Stack sx={styles.postText}>
          <PostTitle title="15 Disadvantages Of Freedom And How You Can Workaround It." />
          <PostDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ...read more" />
        </Stack>
      </Box>
      <Box>
        <PostTags tag="tag" />
      </Box>
    </Stack>
  );
};

export default Post;
