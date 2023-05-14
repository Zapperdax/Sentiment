import { Typography } from "@mui/material";
import React from "react";

const UserName = ({ userName }) => {
  const styles = {
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "Manrope",
    color: "#fff",
    lineHeight: "20px",
    transform: { xs: "none", md: "rotate(-90deg)" },
    alignSelf: "flex-start",
    height: "fit-content",
    width: "fit-content",
    position: "relative",
    left: { xs: "0", md: "35px" },
  };
  return <Typography sx={styles}>{userName}</Typography>;
};

export default UserName;
