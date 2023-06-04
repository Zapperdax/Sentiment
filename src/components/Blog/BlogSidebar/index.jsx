import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import SidebarLink from "../SidebarLink";
import { ROUTES } from "../../../constants/navigation";
import { Link, useNavigate } from "react-router-dom";
import SentimentLogo from "../../SentimentLogo/SentimentLogo";
import CreatePost from "../CreatePost/CreatePost";

const BlogSidebar = ({ openPostModal }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 530px)");
  const isMedium = useMediaQuery("(max-width: 960px)");

  const onHomeClick = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMedium ? "row" : "column",
        gap: "20px",
        justifyContent: "space-around",
        alignItems: "center",
        width: isMedium ? "calc(100vw - 40px)" : "90px",
        height: isMobile ? "67px" : isMedium ? "80px" : "100vh",
        position: "fixed",
        backgroundColor: isMedium ? "#040C18" : "inherit",
        bottom: isMedium ? 0 : "auto",
        top: !isMedium ? 0 : "auto",
        left: 0,
        // background: "-webkit-linear-gradient(20deg, #AE67FA 2%, #F49867 92%)",

        borderRight: !isMedium ? "1px solid #39DCF3" : "",
        margin: isMedium && "20px",
        border: isMedium && "1px solid #39DCF3",
        padding: !isMedium ? "0px 0px 500px" : "0px",
        zIndex: 200,
      }}
    >
      <Link to={ROUTES.HOME}>
        <SentimentLogo type="symbol" />
      </Link>

      {/* <SidebarLink title="Home" onClick={onHomeClick} /> */}
      <Box>
        <SidebarLink title="Create" onClick={() => openPostModal()} />
      </Box>
    </Box>
  );
};

export default BlogSidebar;
