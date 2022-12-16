import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  useMediaQuery,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
} from "@mui/material";
import { Settings, AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [first, setfirst] = useState(false);
  const open = Boolean(anchorElement);

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  const isMobile = useMediaQuery("(max-width:700px)");
  // const isTab = useMediaQuery("(max-width:900px)");
  const isAuthenticated = true;

  return (
    <>
      <AppBar color="transparent" elevation={0} position='fixed' sx={!isMobile ? {marginTop : '1em'} : {marginTop : '0.5em'}} >
        <Toolbar style={styles.toolBar} >
          <Typography style={styles.logoText}>Sentimento</Typography>
          {!isMobile ? (
            <Box ml={2} style={styles.navbarLinks}>
              <Stack direction="row" gap={4}>
                <Link style={styles.linkStyle} to="/chatbotlandingpage">
                  ChatBot
                </Link>
                <Link style={styles.linkStyle} to="/blog">
                  Blog
                </Link>
                <a href="#/" style={styles.linkStyle}>
                  About
                </a>
              </Stack>
              {isAuthenticated ? (
                <Stack gap={3} direction="row" alignItems="center">
                  <Link style={styles.linkStyle} to="/login">
                    Login
                  </Link>
                  <Link
                    style={{ ...styles.signUpBtn, ...styles.linkStyle }}
                    to="/register"
                  >
                    SignUp
                  </Link>
                </Stack>
              ) : (
                <IconButton onClick={handleClick}>
                  <Avatar alt="Profile" style={styles.avatar} />
                </IconButton>
              )}
            </Box>
          ) : (
            <IconButton onClick={() => {setfirst(!first)}}>
              {!first ? (
                <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
              ) : (
                <CloseIcon sx={{ color: "#fff" }} fontSize="large" />
              )}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        open={open}
        anchorEl={anchorElement}
        onClick={handleClose}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 17,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem style={styles.menuItems}>
          {" "}
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>{" "}
          My Profile{" "}
        </MenuItem>
        <MenuItem style={styles.menuItems}>
          {" "}
          <ListItemIcon>
            <Settings />
          </ListItemIcon>{" "}
          Settings{" "}
        </MenuItem>
      </Menu>
    </>
  );
};

const styles = {
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '0 3em'
  },
  navbarLinks: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24.25px",
    cursor: "pointer",
  },
  logoText: {
    textDecoration: "none",
    background: "-webkit-linear-gradient(45deg, #AE67FA 50%, #F49867 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 700,
    marginRight: "2rem",
    fontSize: "28px",
    lineHeight: "24.25px",
  },
  signUpBtn: {
    backgroundColor: "#FF4820",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
  },
  avatar: { height: 35, width: 35 },
  menuItems: {
    color: "#0A1929",
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "24.25px",
  },
};

export default Navbar;