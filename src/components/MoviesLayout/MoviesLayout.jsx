import React, { useState } from "react";
import { Grid, Stack, Button, Typography } from "@mui/material";
import { MoviesCard, Pagination } from "..";

const MoviesLayout = ({ movies }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  if (!Array.isArray(movies)) {
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedMovies = movies.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  return (
    <>
      <Grid
        container
        sx={{
          py: "30px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {displayedMovies.map((item, index) => (
          <MoviesCard key={index} movie={item} i={index} />
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

export default MoviesLayout;
