import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatbotLandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chatbot");
  };
  return (
    <div className="chatbotPage">
      <div className="infoContainer">
        <div className="chatLeftSide">
          <h1>Make it easy to express your feelings</h1>
          <div
            style={{ margin: "1rem 0 2rem" }}
            className="chatButtonContainer"
          >
            <Button variant="text">Learn More</Button>
            <Button sx={{
              bgcolor: '#FF4820', ":hover": {
                bgcolor: "#AE67FA",
                bgOpacity: 0.6,
                color: "#ffffff",
              }
            }} onClick={handleClick} variant="contained">
              Get Started
            </Button>
          </div>
          <p
            style={{
              color: "white",
            }}
          >
            Your Personal Mood Companion
          </p>
          <div className="chatleftparagraphcontainer">
            <p className="chatleftparagraph">Insert Links</p>
            <p className="chatleftparagraph">Insert Links</p>
          </div>
          <div className="chatleftparagraphcontainer">
            <p className="chatleftparagraph">Insert Links</p>
            <p className="chatleftparagraph">Insert Links</p>
          </div>
        </div>
        <div className="phoneOnlyDoodle">
          <img
            className="chatbotdoodle floating"
            src="/images/chattybot.png"
            alt="doodle"
          />
        </div>
        <div className="chatRightSide">
          <img
            className="webChatbotDoodle floating"
            src="/images/chattybot.png"
            alt="doodle"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotLandingPage;
