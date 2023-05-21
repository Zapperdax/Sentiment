import React from "react";
import Lottie from "react-lottie";
import chatbotAnimation from "../../assets/chat-bot.json";

const ChatbotAnimation = () => {
  const animationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chatbotAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={animationDefaultOptions} />;
};

export default ChatbotAnimation;
