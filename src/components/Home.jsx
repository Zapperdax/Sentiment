import React from "react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";

import ai from "../assets/ai.png";

const Home = () => {
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  return (
    <Stack
      direction={isTab ? "column" : "row"}
    >
      <Stack
        flex={1}
        gap={isTab ? "2rem" : "1.3rem"}
        pt={isTab ? 7 : 10}
        justifyContent="center"
      >
        <h1
          style={{
            fontSize: isMobile ? "36px" : is700 ? "48px" : '62px' ,
            lineHeight: isMobile ? "48px" : is700 ? "60px" : '75px',
            ...styles.mainTypography,
          }}
        >
          Sentiment Analyst and Mood Companion by Muhasim
        </h1>

        <Typography
          sx={{
            fontSize: isMobile ? "14px" : is700 ? "16px" : '18px' ,
            lineHeight: isMobile ? "24px" : is700 ? "24px" : '28px',
            ...styles.paraTypography,
          }}
        >
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          bgcolor="#052D56"
          borderRadius={1}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "12px" : is700 ? "16px" : '18px' ,
              lineHeight: isMobile ? "22px" : is700 ? "24px" : '28px',
              ...styles.btnStackTypography,
            }}
          >
            We can change the moods of people!
          </Typography>
          <Button
            sx={{
              fontSize: isMobile ? "12px" : is700 ? "16px" : '18px' ,
              lineHeight: isMobile ? "22px" : is700 ? "24px" : '28px',
              ...styles.stackBtn,
            }}
          >
            {!isMobile ? 'Scan Emotion' : "Scan"}
          </Button>
        </Stack>
      </Stack>

      <Stack sx={styles.imageStack}>
        <img src={ai} style={{ width: "100%", height: "100%" }}></img>
      </Stack>
    </Stack>
  );
};

const styles = {
  mainTypography: {
    textDecoration: "none",
    background: "-webkit-linear-gradient(20deg, #AE67FA 2%, #F49867 92%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: 900,
    letterSpacing: "-0.04rem",
  },
  paraTypography: {
    fontWeight: 400,
    color: "#81AFDD",
  },
  btnStackTypography: {
    flex: 2,
    fontWeight: 400,
    color: "#3D6184",
    padding: "0 1rem",
  },
  stackBtn: {
    flex: "0.7",
    backgroundColor: "#FF4820",
    color: "#fff",
    fontWeight: 400,
    textTransform: "none",
    p: "0.8rem",
    width:'100%',
    minHeight:'50px',
    ":hover": {
      bgcolor: "#AE67FA",
      bgOpacity: 0.6,
      color: "#ffffff",
    },
  },
  imageStack: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Home;
