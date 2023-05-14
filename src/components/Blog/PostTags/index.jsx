import { Box, Typography } from "@mui/material";
import React from "react";

const PostTags = ({ tag }) => {
  return <Tag tag={tag} />;
};

const Tag = ({ tag }) => {
  const styles = {
    wrapper: {
      border: "1px solid #39DCF3",
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
      color: "#39DCF3",
      // background: "-webkit-linear-gradient(20deg, #AE67FA 2%, #F49867 92%)",

      fontFamily: "Manrope",
    },
  };
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.text}>{tag}</Typography>
    </Box>
  );
};

export default PostTags;
