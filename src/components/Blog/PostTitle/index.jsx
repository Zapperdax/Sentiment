import { Typography } from "@mui/material";
import React from "react";

const PostTitle = ({ title, details }) => {
  const styles = {
    fontFamily: "Eudoxus Sans",
    fontSize: { xs: "24px", md: "30px" },
    fontWeight: "600",
    lineHeight: { xs: "33px", md: "44px" },
    color: "#39DCF3",
  };

  if (details) {
    styles.fontSize = { xs: "32px", md: "40px" };
    styles.lineHeight = { xs: "43px", md: "55px" };
  }

  return <Typography sx={styles}>{title}</Typography>;
};

export default PostTitle;
