import React from "react";
import InputEmoji from "react-input-emoji";

const Chatbot = () => {
  const [text, setText] = React.useState("");
  const [chat, setChat] = React.useState([]);

  const handleText = (text) => {
    setChat((preValue) => [...preValue, text]);
  };
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
    </div>
  );
};

export default Chatbot;
