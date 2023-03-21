import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Stack,
  useMediaQuery,
  Divider,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  List,
} from "@mui/material";
import { Settings, AccountCircle, Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

const Navbar = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [menuAnchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  // const { logout } = useLogout();
  // const { user } = useAuthContext();
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:700px)");

  const menuOpen = Boolean(menuAnchorEl);
  const open = Boolean(anchorElement);

  const handleLogout = () => {
    toast.success("Logout Successful!", {
      style: {
        borderRadius: "10px",
        background: "#031B34",
        color: "#fff",
      },
    });
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/");
  };

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
    setAnchorEl(null);
  };

  const menuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar elevation={0} sx={{ background: "transparent" }} position='static'>
        <Toolbar
          disableGutters={true}
          sx={{
            ...styles.toolBar,
            p: isMobile ? "0.5rem 2rem" : "0rem 5rem",
          }}
        >
          <Link style={styles.logoText} to="/">
            Sentimento
          </Link>
          {!isMobile ? (
            <Box ml={2} style={styles.navbarLinks}>
              <Stack direction="row" gap={4}>
                <Link style={styles.linkStyle} to="/chatbot">
                  ChatBot
                </Link>
                <Link style={styles.linkStyle} to="/blog">
                  Blog
                </Link>
                <a href="#/" style={styles.linkStyle}>
                  About
                </a>
              </Stack>
              {!user ? (
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
            <IconButton onClick={menuClick}>
              {!menuOpen ? (
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
          <ListItemIcon sx={{ color: "#FFF" }}>
            <AccountCircle />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem style={styles.menuItems}>
          <ListItemIcon sx={{ color: "#FFF" }}>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem style={styles.menuItems} onClick={handleLogout}>
          <ListItemIcon sx={{ color: "#FFF" }}>
            <Logout />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Menu Drawer color : #031B34 */}
      {/* Mobile Menu  */}
      <Menu
        open={menuOpen}
        anchorEl={menuAnchorEl}
        onClick={handleClose}
        onClose={handleClose}
        PaperProps={menuInputProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ my: 1 }}>
          <Link style={styles.menuItems} to="/chatbotlandingpage">
            ChatBot
          </Link>
        </MenuItem>
        <MenuItem sx={{ my: 1 }}>
          <Link style={styles.menuItems} to="/blog">
            Blog
          </Link>
        </MenuItem>
        <MenuItem sx={{ my: 1 }}>
          <a href="#/" style={styles.menuItems}>
            About
          </a>
        </MenuItem>
        <Divider />

        {!user ? (
          <MenuItem>
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
          </MenuItem>
        ) : (
          <List>
            <MenuItem sx={{ my: 1, ...styles.menuItems }}>
              <ListItemIcon sx={{ color: "#FFF" }}>
                <AccountCircle />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem sx={{ my: 1, ...styles.menuItems }}>
              <ListItemIcon sx={{ color: "#FFF" }}>
                <Settings />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem style={styles.menuItems} onClick={handleLogout}>
              <ListItemIcon sx={{ color: "#FFF" }}>
                <Logout />
              </ListItemIcon>
              Logout
            </MenuItem>
          </List>
        )}
      </Menu>
    </>
  );
};

const styles = {
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 1,
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
    color: "#ffffff",
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "24.25px",
    textDecoration: "none",
  },
};

// Account Menu
const menuInputProps = {
  elevation: 10,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    bgcolor: "#031B34",

  }, "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    bgcolor: "#031b34",
    top: 0,
    right: 17,
    width: 10,
    height: 10,
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
};

export default Navbar;
