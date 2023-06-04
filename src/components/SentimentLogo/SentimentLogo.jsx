import React from "react";
import sentimentLogo from "../../assets/images/Sentimento-main.svg";
import sentiment from "../../assets/images/SentimentoS.svg";

const SentimentLogo = ({ type }) => {
  return type === "symbol" ? (
    <img src={sentiment} alt="logo" style={{ height: "50px" }} />
  ) : (
    <img
      src={sentimentLogo}
      alt="logo"
      style={{
        height: type === "small" ? "50px" : type === "form" ? "90px" : "",
      }}
    />
  );
};

export default SentimentLogo;
