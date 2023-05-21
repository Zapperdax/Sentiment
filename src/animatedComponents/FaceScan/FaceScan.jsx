import React from "react";
import Lottie from "react-lottie";
import faceScanAnimation from "../../assets/face-scan.json";

const FaceScanAnimation = () => {
  const animationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: faceScanAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={animationDefaultOptions} height={720} width={450} />;
};

export default FaceScanAnimation;
