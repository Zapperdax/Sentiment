import React from "react";
import Lottie from "react-lottie";
import faceScanAnimation from "../../assets/face-scan.json";
import { useMediaQuery } from "@mui/material";

const FaceScanAnimation = () => {
  const isTab = useMediaQuery("(max-width:1050px)");
  const animationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: faceScanAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={animationDefaultOptions}
      height={isTab ? 450 : 720}
      width={isTab ? 300 : 450}
    />
  );
};

export default FaceScanAnimation;
