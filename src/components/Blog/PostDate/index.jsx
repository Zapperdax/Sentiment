import { Typography, Hidden } from "@mui/material";
import React from "react";

const PostDate = ({ date }) => {
  const styles = {
    fontWeight: "600",
    fontSize: { sm: "16px", md: "32px" },
    lineHeight: { sm: "20px", md: "40px" },
    fontFamily: "Lexend Deca",
    textAlign: "right",
    height: { xs: "100%", md: "74px" },
  };
  const [day, month] = date.split(" ");
  return (
    <Typography sx={styles}>
      <Hidden mdUp>
        <Typography>{date}</Typography>
      </Hidden>
      <Hidden mdDown>
        {day}
        <br />
        {month}
      </Hidden>
    </Typography>
  );
};

export default PostDate;
