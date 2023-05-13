import { Typography } from "@mui/material";
import React from "react";

const PostTitle = ({ title }) => {
  const styles = {
    fontFamily: "DM Serif Display",
    fontSize: { xs: "24px", md: "32px" },
    fontWeight: "600",
    lineHeight: { xs: "33px", md: "44px" },
    color: "#fff",
  };

  return <Typography sx={styles}>{title}</Typography>;
};

export default PostTitle;
