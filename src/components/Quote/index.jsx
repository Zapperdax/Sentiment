import { Box, Grow, Typography } from "@mui/material";
import React from "react";
import PostDescription from "../Blog/PostDescription";
import QuoteSvg from "../../assets/quote.svg";
import AuthorSvg from "../../assets/author.svg";

const styles = {
  quoteBox: {
    position: "relative",
    display: "flex",
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    borderLeft: "3px solid #ff5722",
    padding: "1.5rem 1rem 1rem",
    borderRadius: "8px",
    background: "#011D3C",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    // paddingTop: 1,
  },
  description: {
    color: "#333",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  author: {
    mt: 1,
    fontWeight: "600",
    fontSize: "14px",
  },
  image: {
    width: "30px",
    position: "absolute",
    top: -10,
    left: 5,
  },
};

const Quote = ({ data, i }) => {
  return (
    <Grow in key={i} timeout={(i + 1) * 250}>
      <Box sx={styles.quoteBox}>
        <Box component="img" src={QuoteSvg} sx={styles.image}></Box>
        <PostDescription
          quote={true}
          details={true}
          description={data.quote}
          sx={styles.description}
        />
        <Typography variant="h6" sx={styles.author}>
          <Box component="img" src={AuthorSvg} sx={{ width: "12px" }} />{" "}
          {data.author}
        </Typography>
      </Box>
    </Grow>
  );
};

export default Quote;
