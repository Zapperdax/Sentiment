import { Typography } from "@mui/material";
import React from "react";

const PostDescription = ({ description }) => {
  const styles = {
    fontWeight: "200",
    fontSize: { sm: "14px", md: "16px" },
    lineHeight: { sm: "20px", md: "27px" },
    // width: "886px",
  };

  return <Typography sx={styles}>{description}</Typography>;
};

export default PostDescription;
