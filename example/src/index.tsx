import React from "react";
import { createRoot } from "react-dom/client";

import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const renderReactDom = () => {
  const container = document.getElementById("app") as HTMLElement;
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(<App />);
};

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      renderReactDom();
    },
    false
  );
} else {
  renderReactDom();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
