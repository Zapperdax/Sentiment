import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import FormComp from "../../components/AuthForm/FormComp/FormComp";
const logo = "public/images/float.png";

const FormContainer = ({ type, initialValues, onSubmit, validationSchema, loading }) => {
  const isTab = useMediaQuery("(max-width: 1200px)");

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      {!isTab && (
        <Grid item lg={4} sx={{ padding: "2rem", height: "100vh" }}>
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
            <img
              style={{ margin: "1rem 0 0 1rem", width: "100%" }}
              src={logo}
              className="floating"
              alt="logo"
            />
          </Box>
        </Grid>
      )}
      <Grid item md={8} xs={12} sx={{}}>
        <FormComp
          isLoading={loading}
          type={type}
          initialValues={initialValues}
          validation={validationSchema}
          onSubmit={onSubmit}
        />
      </Grid>
    </Grid>
  );
};

export default FormContainer;
