import { Box, Typography } from "@mui/material";
import React from "react";

const PostTags = ({ tag }) => {
  return <Tag tag={tag} />;
};

const Tag = ({ tag }) => {
  const styles = {
    wrapper: {
      border: "1px solid #fff",
      borderRadius: "100px",
      width: "100px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontWeight: "500",
      fontSize: "10px",
      lineHeight: "12px",
      color: "#fff",
    },
  };
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.text}>{tag}</Typography>
    </Box>
  );
};

export default PostTags;
