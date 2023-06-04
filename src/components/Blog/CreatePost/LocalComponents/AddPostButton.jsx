import { Button, CircularProgress } from "@mui/material";
import React from "react";

const AddPostButton = ({ isLoading, text }) => {
  const styles = {
    button: {
      width: "180px",
      background: "#39DCF3",
      color: "#272727",
      fontWeight: "800",
      textTransform: "capital",
      borderRadius: "0",
      fontFamily: "Manrope",
      fontSize: "1rem",
      alignSelf: "center",

      "&:hover": {
        background: "#6EEB93",
      },
    },
  };
  return (
    <Button type="submit" size="large" sx={styles.button}>
      {!isLoading ? (
        text
      ) : (
        <CircularProgress size={30} sx={{ color: "black" }} />
      )}
    </Button>
  );
};

export default AddPostButton;
