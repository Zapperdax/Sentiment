import React from "react";
import InputEmoji from "react-input-emoji";
import {useMediaQuery, Box } from "@mui/material";


const Chatbot = () => {
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");

  const [text, setText] = React.useState("");
  const [chat, setChat] = React.useState([]);

  const handleText = (text) => {
    setChat((preValue) => [...preValue, text]);
  };
  return (
    <Box className="chatbotPage" style={{gap:"0.5rem"}}  sx={{
      px: is700 ? "2rem" : "5rem",
      py: isTab ? "6rem" : "6rem",
      gap: isTab ? "3rem" : "4rem",
    }}>
      <img
        className="floating chatbotPNG"
        src="/images/chattybot.png"
        alt="chatbot"
      />
      <div className="chatInfoContainer">
        <div className="chatbotInformation">
          <h1>Welcome, User</h1>
          <h4>How May I Assist You</h4>
        </div>
        <div className="chatMain">
          {chat.map((message, i) => {
            return (
              <div key={i} className="userMessage">
                <p>{message}</p>
              </div>
            );
          })}
        </div>
        <div className="chatMessageSend">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleText}
            placeholder="Chat"
            borderColor="#1A1A1A"
            height={300}
          />
        </div>
      </div>
    </Box>
  );
};

export default Chatbot;
