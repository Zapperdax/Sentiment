import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

const SidebarLink = ({ title, onClick }) => {
  const isMobile = useMediaQuery("(max-width: 530px)");

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        cursor: "pointer",
      },
    },
    text: {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Manrope",
      lineHeight: "20px",
      letterSpacing: "1px",
      //   textTransform: "lowercase",
    },
    icon: {
      height: "35px",
      width: "35px",
    },
  };

  const iconMap = {
    Home: <HomeIcon sx={styles.icon} />,
    Search: <SearchIcon sx={styles.icon} />,
    Create: <AddCircleOutlineIcon sx={styles.icon} />,
  };

  const icon = iconMap[title];

  return (
    <Box sx={styles.wrapper}>
      <Button onClick={onClick} sx={{ color: "#39DCF3" }}>
        {icon}
      </Button>
      {!isMobile && <Typography sx={styles.text}>{title}</Typography>}
    </Box>
  );
};

export default SidebarLink;
