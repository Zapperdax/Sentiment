import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  ListItem,
  Stack,
  useMediaQuery,
  Divider,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  SwipeableDrawer,
  List
} from "@mui/material";
import { Settings, AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [drawerOpen, setdrawerOpen] = useState(false);
  const open = Boolean(anchorElement);
  const isMobile = useMediaQuery("(max-width:700px)");
  // const isTab = useMediaQuery("(max-width:900px)");
  const isAuthenticated = false;

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const handleDrawer = () => {
    setdrawerOpen(!drawerOpen);
  }

  return (
    <>
      <AppBar elevation={0} position='fixed' sx={{ background: '#040C18' }}>
        <Toolbar style={styles.toolBar} disableGutters={true}
          sx={{
            p: isMobile ? '0.5rem 2rem' : '1rem 5rem' 
          }}
        >
          <Link style={styles.logoText} to='/'>Sentimento</Link>
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
            <IconButton onClick={handleDrawer}>
              {!drawerOpen ? (
                <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
              ) : (
                <CloseIcon sx={{ color: "#fff" }} fontSize="large" />
              )}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* // Account Settings Menu */}
      <Menu
        open={open}
        anchorEl={anchorElement}
        onClick={handleClose}
        onClose={handleClose}
        PaperProps={menuInputProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem style={styles.menuItems}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem style={styles.menuItems}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>


      {/* Mobile Menu  */}
      <SwipeableDrawer open={drawerOpen} anchor='right' PaperProps={{
        sx: {
          mt: '4rem', mr: '4rem', height: '35vh', width: '25vh',
          borderRadius: '3px'
        }
      }} onOpen={() => setdrawerOpen(true)} onClose={() => setdrawerOpen(false)}>
        <List mt={1} onClick={() => setdrawerOpen(false)}>
          <ListItem >
            <Link style={styles.menuItems} to="/chatbotlandingpage">
              ChatBot
            </Link>
          </ListItem>
          <ListItem>
            <Link style={styles.menuItems} to="/blog">
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <a href="#/" style={styles.menuItems}>
              About
            </a>
          </ListItem>
        </List>
        <Divider />

        {isAuthenticated ? (
          <List onClick={() => setdrawerOpen(false)}>
            <ListItem >
              <Stack pl={2} gap={2} direction="row" alignItems="center">
                <Link style={styles.menuItems} to="/login">
                  Login
                </Link>
                <Link
                  style={{ ...styles.signUpBtn, ...styles.linkStyle }}
                  to="/register"
                >
                  SignUp
                </Link>
              </Stack>
            </ListItem>
          </List>
        ) : (<>
          <List onClick={() => setdrawerOpen(false)}>
            <ListItem style={styles.menuItems}>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              My Profile
            </ListItem>
            <ListItem style={styles.menuItems}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              Settings
            </ListItem>
          </List>
        </>
        )}

      </SwipeableDrawer>

    </>
  );
};

const styles = {
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
              fontFamily: 'Manrope'
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
                  fontFamily: 'Manrope'
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
          fontFamily: 'Manrope',
            textDecoration: 'none'
},
};

const menuInputProps = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
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
}

export default Navbar;