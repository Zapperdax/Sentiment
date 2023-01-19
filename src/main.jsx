import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </AuthContextProvider>
);
