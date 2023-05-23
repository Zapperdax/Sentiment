import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const PostSkeleton = () => {
  const styles = {
    wrapper: {
      gap: "15px",
    },
    content: {
      display: "flex",
      width: "100%",
      gap: "20px",
      flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    },
    postText: {
      flex: 1,
      gap: "10px",
    },
    tagContainer: {
      display: "flex",
      gap: "20px",
      paddingLeft: { sm: "0px", md: "105px" },
    },
  };
  return (
    <Box sx={styles.content}>
      <Box sx={styles.postText}>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ backgroundColor: "#3D6184", marginBottom: "15px" }}
          height={40}
        />
        <Skeleton sx={{ backgroundColor: "#3D6184", height: "20px" }} />
        <Skeleton sx={{ backgroundColor: "#3D6184", height: "20px" }} />
        <Skeleton sx={{ backgroundColor: "#3D6184", height: "20px" }} />
        <Skeleton sx={{ backgroundColor: "#3D6184", height: "20px" }} />
        <Skeleton sx={{ backgroundColor: "#3D6184", height: "20px" }} />
        <Box sx={styles.tagContainer}>
          <Skeleton
            sx={{
              margin: 0,
              height: "55px",
              borderRadius: "70px",
              width: "100px",
              backgroundColor: "#3D6184",
            }}
          />
          <Skeleton
            sx={{
              margin: 0,
              height: "55px",
              borderRadius: "70px",
              width: "100px",
              backgroundColor: "#3D6184",
            }}
          />
          <Skeleton
            sx={{
              margin: 0,
              height: "55px",
              borderRadius: "70px",
              width: "100px",
              backgroundColor: "#3D6184",
            }}
          />
          <Skeleton
            sx={{
              margin: 0,
              height: "55px",
              borderRadius: "70px",
              width: "100px",
              backgroundColor: "#3D6184",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PostSkeleton;
