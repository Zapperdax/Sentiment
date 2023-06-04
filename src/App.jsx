import React from "react";
import { lazy, Suspense } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import {
  ChangePassword,
  Chatbot,
  EnterOTP,
  ForgotPassword,
  Navbar,
  FaceDetection,
  ProtectRoutes,
  PostSkeleton,
} from "./components";
import { Toaster } from "react-hot-toast";
import {
  Login,
  Register,
  Home,
  ChatbotLanding,
  BlogPost,
  MainPage,
} from "./pages";
import { ROUTES } from "./constants/navigation";
const Blog = lazy(() => import("./pages/Blog/Blog"));

function App() {
  const location = useLocation();
  const navbarHidden =
    location.pathname.includes(ROUTES.BLOG) ||
    location.pathname.includes(ROUTES.LOGIN) ||
    location.pathname.includes(ROUTES.REGISTER) ||
    location.pathname.includes(ROUTES.FORGOT_PASSWORD) ||
    location.pathname.includes(ROUTES.CHANGE_PASSWORD) ||
    location.pathname.includes(ROUTES.ENTER_OTP);
  const ar = [1, 2, 3, 4, 5, 6];

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
          <Route
            path={ROUTES.BLOG}
            element={
              <Suspense
                fallback={ar.map((item) => (
                  <PostSkeleton />
                ))}
              >
                <Blog />
              </Suspense>
            }
          ></Route>
          <Route path={ROUTES.BLOG_POST} element={<BlogPost />}></Route>
          <Route path={ROUTES.MAIN_PAGE} element={<MainPage />}></Route>
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
