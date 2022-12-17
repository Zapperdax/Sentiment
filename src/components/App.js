import React from "react";
import { Box } from "@mui/material";
import RegisterPage from "./RegisterPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import EnterOTP from "./EnterOTP";
import ChangePassword from "./ChangePassword";
import Home from "./Home";
import ChatbotLandingPage from "./ChatbotLandingPage";
import Chatbot from "./Chatbot";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/enterOTP" element={<EnterOTP />}></Route>
          <Route path="/changePassword" element={<ChangePassword />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/chatbotlandingpage"
            element={<ChatbotLandingPage />}
          ></Route>
          <Route path="/chatbot" element={<Chatbot />}></Route>
        </Routes>
    </>
  );
}

export default App;
