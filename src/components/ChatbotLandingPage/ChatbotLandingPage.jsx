import React from "react";
import { Button, useMediaQuery, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatbotLandingPage = () => {
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chatbot");
  };
  return (
    <Box className="chatbotPage" sx={{
      px: is700 ? "2rem" : "5rem",
      // py: isTab ? "6rem" : "6rem",
      gap: isTab ? "3rem" : "4rem",
    }}>
      <div className="infoContainer">
        <div className="chatLeftSide">
        <img
            className="webChatbotDoodle floating"
            src="/images/chattybot.png"
            alt="doodle"
          />
        </div>
        {/* <div className="phoneOnlyDoodle">
          <img
            className="chatbotdoodle floating"
            src="/images/chattybot.png"
            alt="doodle"
          />
        </div> */}
        <div className="chatRightSide">
        <h1>Make it easy to express your feelings</h1>
          <div
            style={{ margin: "1rem 0 1rem" }}
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
          {/* <div className="chatleftparagraphcontainer">
            <p className="chatleftparagraph">Insert Links</p>
            <p className="chatleftparagraph">Insert Links</p>
          </div>
          <div className="chatleftparagraphcontainer">
            <p className="chatleftparagraph">Insert Links</p>
            <p className="chatleftparagraph">Insert Links</p>
          </div> */}
        </div>
      </div>
    </Box>
  );
};

export default ChatbotLandingPage;

