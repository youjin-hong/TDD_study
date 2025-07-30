import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 타입 안전한 방법으로 root 요소 가져오기
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure you have a div with id="root" in your HTML.'
  );
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
