import React from "react";
import { Box, Drawer, Stack, useMediaQuery } from "@mui/material";
import Post from "../../components/Blog/Post";

const Blog = () => {
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      sx={{
        px: is700 ? "2rem" : "5rem",
        pt: isTab ? "6rem" : "6rem",
        gap: "2rem",
        color: "white",
      }}
    >
      <Drawer
        sx={{
          width: "100px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100px",
            boxSizing: "border-box",
            backgroundColor: "inherit",
          },
        }}
        variant="permanent"
        anchor="left"
      />
      <Box sx={{ marginLeft: { xs: "0px", lg: "65px" } }}>
        <Post />
      </Box>
    </Stack>
  );
};

export default Blog;
