import { Box, Typography } from "@mui/material";
import React from "react";
import SentimentLogo from "../../../../SentimentLogo/SentimentLogo";

const PostFormHeader = () => {
  return (
    <Box
      display="flex"
      flex={3}
      alignContent="center"
      justifyContent="center"
      gap={1}
    >
      <SentimentLogo type="symbol" />
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "600",
          fontFamily: "Eudoxus Sans",
          textAlign: "center",
        }}
      >
        Add new post
      </Typography>
    </Box>
  );
};

export default PostFormHeader;
