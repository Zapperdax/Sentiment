import React from "react";
import { Routes, Route } from "react-router-dom";
import {ChangePassword, Login, RegisterPage, Chatbot,
  ChatbotLandingPage, EnterOTP, ForgotPassword, Home, Navbar, FaceDetection} from './components'
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
          <Route path="/facedetection" element={<FaceDetection />}></Route>
        </Routes>
    </>
  );
}

export default App;
