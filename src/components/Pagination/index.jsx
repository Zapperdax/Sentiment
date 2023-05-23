import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Stack direction="row" alignItems="center" mt={2} justifyContent="center">
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowBackIosIcon size="large" sx={{ color: "white" }} />
      </Button>

      <Typography variant="body1" sx={{ color: "white" }}>
        Page {currentPage} of {totalPages}
      </Typography>

      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ArrowForwardIosIcon size="large" sx={{ color: "white" }} />
      </Button>
    </Stack>
  );
};

export default Pagination;
