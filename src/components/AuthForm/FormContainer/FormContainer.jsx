import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FormComp from "../FormComp/FormComp";
import { FaceScanAnimation } from "../../../animatedComponents/index";
import logo from "../../../../public/images/float.png";
import SentimentLogo from "../../SentimentLogo/SentimentLogo";

const FormContainer = ({
  type,
  initialValues,
  onSubmit,
  validationSchema,
  loading,
}) => {
  const isTab = useMediaQuery("(max-width: 1200px)");

  return (
    <div className="gradient__bg">
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <SentimentLogo />
              <Typography
                sx={{
                  marginTop: "2rem",
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Sentiment Analyst And Mood Companion
              </Typography>
            </Box>
            {/* <FaceScanAnimation /> */}
          </Grid>
        )}
        <Grid item md={7} xs={12} sx={{}}>
          <FormComp
            isLoading={loading}
            type={type}
            initialValues={initialValues}
            validation={validationSchema}
            onSubmit={onSubmit}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FormContainer;
