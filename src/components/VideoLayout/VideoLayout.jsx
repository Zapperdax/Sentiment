import { Box, Grid, Grow } from "@mui/material";
import React, { useState } from "react";
import { Pagination } from "../";

const VideoLayout = ({ videos }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  if (!Array.isArray(videos)) {
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedVideos = videos.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(videos.length / itemsPerPage);

  return (
    <>
      <Grid
        container
        sx={{
          py: "30px",
          alignSelf: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {displayedVideos.map((item, index) => (
          <VideoCard video={item} key={index} i={index} />
        ))}
      </Grid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

function VideoCard({ video, i }) {
  return (
    <Box
      sx={{
        padding: "10px",
        backgroundColor: "transparent",
        maxWidth: 270,
        borderRadius: "10px",
        "&:hover": { transform: "scale(1.02)", cursor: "pointer" },
      }}
    >
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Box
          component="video"
          style={{
            height: "150px",
            width: "100%",
            borderRadius: "10px",
          }}
          muted="muted"
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => event.target.pause()}
          src={video.videoLink}
        >
          as
        </Box>
      </Grow>
    </Box>
  );
}

export default VideoLayout;
