import { Stack, Typography } from "@mui/material";
import React from "react";

const FormHeading = ({ headerDescription }) => {
  const styles = {
    heading: {
      fontFamily: "DM Serif Display",
      fontSize: "48px",
      fontWeight: "bold",
      color: "white",
    },
    description: {
      fontFamily: "Manrope",
      fontSize: "15px",
      fontWeight: "bold",
      color: "white",
    },
  };
  return (
    <Stack marginBottom={3}  alignSelf="flex-start">
      <Typography variant="h5" sx={styles.heading}>
        Welcome
      </Typography>
      <Typography sx={styles.description}>{headerDescription}</Typography>
    </Stack>
  );
};

export default FormHeading;
