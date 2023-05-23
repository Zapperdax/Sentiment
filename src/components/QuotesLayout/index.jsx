import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Quote from "../Quote";
import Masonry from "react-masonry-css";
import "./layout.css";
import { Pagination } from "..";

const QuotesLayout = ({ quotes }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  if (!Array.isArray(quotes)) {
    return null;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedQuotes = quotes.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(quotes.length / itemsPerPage);
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {displayedQuotes.map((quote, index) => (
          <div item key={index}>
            <Quote data={quote} i={index} />
          </div>
        ))}
      </Masonry>
      <Box>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default QuotesLayout;
