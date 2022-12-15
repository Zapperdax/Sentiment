import React from "react";

const Chatbot = () => {
  return (
    <div className="chatbotPage">
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
      </div>
      <div></div>
    </div>
  );
};

export default Chatbot;
