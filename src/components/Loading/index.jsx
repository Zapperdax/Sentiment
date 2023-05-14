import { LinearProgress, Stack } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        color: "grey.500",
        my: 10,
        display: "flex",
        justifyContent: "center",
      }}
      spacing={2}
    >
      <LinearProgress color="secondary" />
    </Stack>
  );
};

export default Loading;
