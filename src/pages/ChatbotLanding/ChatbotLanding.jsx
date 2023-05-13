import React from "react";
import { Button, useMediaQuery, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatbotLanding = () => {
  const is700 = useMediaQuery("(max-width:700px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chatbot");
  };
  return (
    <Box
      className="chatbotPage"
      sx={{
        px: is700 ? "2rem" : "5rem",
        gap: isTab ? "3rem" : "4rem",
      }}
    >
      <div className="infoContainer">
        <div className="chatLeftSide">
          <img
            className="webChatbotDoodle floating"
            src="/images/chattybot.png"
            alt="doodle"
          />
        </div>
        <div className="chatRightSide">
          <h1>Your Personal Mood Companion</h1>
          <div
            style={{ margin: "1rem 0 1rem" }}
            className="chatButtonContainer"
          >
            <Button
              sx={{
                mr: 2,
              }}
              variant="text"
            >
              Learn More
            </Button>
            <Button
              sx={{
                bgcolor: "#FF4820",
                ":hover": {
                  bgcolor: "#AE67FA",
                  bgOpacity: 0.6,
                  color: "#ffffff",
                },
              }}
              onClick={handleClick}
              variant="contained"
            >
              Get Started
            </Button>
          </div>
          <p
            style={{
              color: "white",
            }}
          >
            Make it easy to express your feelings
          </p>
        </div>
      </div>
    </Box>
  );
};

export default ChatbotLanding;
