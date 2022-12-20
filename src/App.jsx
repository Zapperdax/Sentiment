import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {ChangePassword, Login, RegisterPage, Chatbot,
  ChatbotLandingPage, EnterOTP, ForgotPassword, Home, Navbar} from './components'
function App() {
  const is700 = useMediaQuery("(max-width:700px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isTab = useMediaQuery("(max-width:1050px)");
  return (
    <>
      <Navbar />
    <Box sx={{
        px: is700 ? "2rem" : "5rem",
        py: isTab ? "6rem" : "6rem",
        gap: isTab ? "3rem" : "4rem",
      }}>
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
    </Box>
    </>
  );
}

export default App;
