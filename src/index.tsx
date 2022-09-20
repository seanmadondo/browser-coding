import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import FAQ from "./routes/faqs";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageCarousel from "./routes/carousel";
import { Tree } from "./routes/tree";
import { Component } from "./routes/interview";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/imageCarousel" element={<ImageCarousel />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/interview" element={<Component />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
