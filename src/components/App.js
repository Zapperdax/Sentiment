import React from "react";
import RegisterPage from "./RegisterPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import EnterOTP from "./EnterOTP";
import ChangePassword from "./ChangePassword";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
      <Route path="/enterOTP" element={<EnterOTP />}></Route>
      <Route path="/changePassword" element={<ChangePassword />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
