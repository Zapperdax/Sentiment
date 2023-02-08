import React from "react";
import { Stack, useMediaQuery } from "@mui/material";

const Blog = () => {
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      sx={{
        px: is700 ? "2rem" : "5rem",
        pt: isTab ? "6rem" : "6rem",
        gap: isTab ? "3rem" : "4rem",
        color: "white",
      }}
    >
      Blog
    </Stack>
  );
};

export default Blog;
