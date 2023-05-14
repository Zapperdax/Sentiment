import { Box, Grid } from "@mui/material";
import React from "react";
import Quote from "../Quote";
import Masonry from "react-masonry-css";
import "./layout.css";

const QuotesLayout = ({ quotes }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {quotes?.slice(0, 12).map((quote, index) => (
        <div item key={index}>
          <Quote data={quote} />
        </div>
      ))}
    </Masonry>
  );
};

export default QuotesLayout;
