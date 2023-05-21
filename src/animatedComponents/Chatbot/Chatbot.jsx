import React from "react";
import Lottie from "react-lottie";
import chatbotAnimation from "../../assets/chat-bot.json";
import { useMediaQuery } from "@mui/material";

const ChatbotAnimation = () => {
  const isTab = useMediaQuery("(max-width:1050px)");
  const animationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chatbotAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={animationDefaultOptions} width={isTab && "330px"} />;
};

export default ChatbotAnimation;
