import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="gradient__bg">
        <App />
      </div>
    </BrowserRouter>
  </Provider>
);
