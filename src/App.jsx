import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  ChangePassword,
  Chatbot,
  EnterOTP,
  ForgotPassword,
  Navbar,
  FaceDetection,
  ProtectRoutes,
} from "./components";
import { Toaster } from "react-hot-toast";
import { Blog, Login, Register, Home, ChatbotLanding } from "./pages";
import { ROUTES } from "./constants/navigation";

function App() {
  const location = useLocation();
  const navbarHidden = location.pathname === ROUTES.BLOG;

  return (
    <>
      {!navbarHidden && <Navbar />}
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        <Route path={ROUTES.REGISTER} element={<Register />}></Route>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={<ForgotPassword />}
        ></Route>
        <Route path={ROUTES.ENTER_OTP} element={<EnterOTP />}></Route>
        <Route
          path={ROUTES.CHANGE_PASSWORD}
          element={<ChangePassword />}
        ></Route>

        <Route path={ROUTES.HOME} element={<Home />}>
          <Route path={ROUTES.HOME} element={<Home />}></Route>
        </Route>

        <Route element={<ProtectRoutes />}>
          <Route path={ROUTES.CHATBOT} element={<Chatbot />}></Route>
          <Route path={ROUTES.BLOG} element={<Blog />}></Route>
          <Route
            path={ROUTES.FACE_DETECTION}
            element={<FaceDetection />}
          ></Route>
          <Route
            path={ROUTES.CHATBOT_LANDING_PAGE}
            element={<ChatbotLanding />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
