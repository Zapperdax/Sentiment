import React, { useCallback, useRef, useState, useEffect } from "react";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  Icon,
  Backdrop,
  CircularProgress,
  Box,
  LinearProgress,
  Card,
  CardMedia,
} from "@mui/material";
import Webcam from "react-webcam";
import {
  FaceDetection,
  Loading,
  MoviesLayout,
  Quote,
  QuotesLayout,
  SongsLayout,
  VideoLayout,
} from "../../components/index";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, allMovies } from "../../features/movie/movieSlice";
import { fetchQuotes, allQuotes } from "../../features/quote/quoteSlice";
import { fetchSongs, allSongs } from "../../features/song/songSlice";
import { fetchVideos, allVideos } from "../../features/video/videoSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(allMovies);
  const quotes = useSelector(allQuotes);
  const songs = useSelector(allSongs);
  const videos = useSelector(allVideos);
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [img, setImg] = useState(null);
  const [category, setCategory] = useState("sad");
  const webcamRef = useRef(null);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies(category));
    dispatch(fetchQuotes(category));
    dispatch(fetchSongs(category));
    dispatch(fetchVideos(category));
  }, [dispatch, category]);

  const videoConstraints = {
    width: { min: 380 },
    height: { min: 100 },
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    setProcessing(true);
  }, [webcamRef]);

  const handleScan = () => {
    setIsCameraOn(true);
  };

  const handleCameraClose = () => {
    setIsCameraOn(false);
    setImg(null);
  };
  return (
    <>
      <Stack
        direction={isTab ? "column" : "row"}
        sx={{
          px: is700 ? "2rem" : "5rem",
          pt: isTab ? "1rem" : "2rem",
          gap: isTab ? "3rem" : "4rem",
          mb: 2,
        }}
      >
        {isCameraOn && img === null ? (
          <Backdrop sx={{ zIndex: "1" }} open={true}>
            <Stack sx={styles.webcamStyles}>
              <Icon
                sx={styles.iconStyles}
                fontSize="large"
                color="warning"
                onClick={() => handleCameraClose()}
              >
                <CloseIcon />
              </Icon>
              <Webcam
                ref={webcamRef}
                imageSmoothing={true}
                screenshotFormat="image/jpeg"
                mirrored={true}
                videoConstraints={videoConstraints}
              />
              <Button
                sx={{
                  fontSize: isMobile ? "12px" : is700 ? "16px" : "18px",
                  lineHeight: isMobile ? "22px" : is700 ? "24px" : "28px",
                  ...styles.stackBtn,
                }}
                onClick={capture}
              >
                {!isMobile ? "Capture Emotion" : "Capture"}
              </Button>
            </Stack>
          </Backdrop>
        ) : img === null ? null : (
          <Backdrop sx={{ zIndex: "1" }} open={true}>
            <Stack sx={styles.webcamStyles}>
              {processing ? (
                <CircularProgress
                  sx={{
                    top: isMobile ? "40%" : "45%",
                    left: isMobile ? "40%" : "45%",
                    fontWeight: "bold",
                    color: "#040c18",
                    ...styles.circularStyles,
                  }}
                />
              ) : null}
              <Icon
                sx={styles.iconStyles}
                fontSize="large"
                color="warning"
                onClick={() => handleCameraClose()}
              >
                <CloseIcon />
              </Icon>
              <FaceDetection
                img={img}
                setCategory={setCategory}
                setProcessing={setProcessing}
                handleCameraClose={handleCameraClose}
              />
              <Button
                disabled={processing}
                sx={{
                  fontSize: isMobile ? "12px" : is700 ? "16px" : "18px",
                  lineHeight: isMobile ? "22px" : is700 ? "24px" : "28px",
                  ...styles.stackBtn,
                }}
                onClick={() => setImg(null)}
              >
                {!isMobile ? "Retake Photo" : "Retake"}
              </Button>
            </Stack>
          </Backdrop>
        )}
      </Stack>
      <Stack alignItems="center">
        <Typography
          style={{
            fontSize: isMobile ? "18px" : is700 ? "24px" : "32px",
            ...styles.mainTypography,
          }}
        >
          Current Emotion: {category}
        </Typography>

        <Box pt={isTab ? 7 : 10}>
          <Button
            sx={{
              fontSize: isMobile ? "12px" : is700 ? "16px" : "18px",
              lineHeight: isMobile ? "22px" : is700 ? "24px" : "28px",
              ...styles.stackBtn,
            }}
            onClick={handleScan}
          >
            {!isMobile ? "Scan Emotion" : "Scan"}
          </Button>
        </Box>
      </Stack>
      <Stack
        sx={{
          px: is700 ? "2rem" : "5rem",
          mb: 2,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "18px" : is700 ? "24px" : "32px",
            marginBottom: "2rem",
            ...styles.mainTypography,
          }}
        >
          Quotes
        </h1>
        {quotes.length === 0 ? <Loading /> : <QuotesLayout quotes={quotes} />}
      </Stack>

      <Stack
        sx={{
          px: is700 ? "2rem" : "5rem",
          mb: 2,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "18px" : is700 ? "24px" : "32px",
            ...styles.mainTypography,
          }}
        >
          Movies
        </h1>
        {movies.length === 0 ? (
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
        ) : (
          <MoviesLayout movies={movies} />
        )}
      </Stack>
      <Stack
        sx={{
          px: is700 ? "2rem" : "5rem",
          mb: 2,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "18px" : is700 ? "24px" : "32px",
            ...styles.mainTypography,
          }}
        >
          Songs
        </h1>
        {songs.length === 0 ? <Loading /> : <SongsLayout songs={songs} />}
      </Stack>
      <Stack
        sx={{
          px: is700 ? "2rem" : "5rem",
          mb: 2,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "18px" : is700 ? "24px" : "32px",
            ...styles.mainTypography,
          }}
        >
          Videos
        </h1>
        {videos.length === 0 ? <Loading /> : <VideoLayout videos={videos} />}
      </Stack>
    </>
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
    width: "100%",
    minHeight: "50px",
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
  webcamStyles: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    zIndex: "1",
  },
  circularStyles: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    // maxWidth: '100%',
    zIndex: "1000",
  },
  iconStyles: {
    position: "absolute",
    top: 20,
    right: 5,
    zIndex: "1",
    "&:hover": {
      cursor: "pointer",
    },
  },
};

export default MainPage;
