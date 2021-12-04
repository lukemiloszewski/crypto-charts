import React from "react";
import { render } from "react-dom";
import "./index.css";
import { App } from "@components/App/App";
import reportWebVitals from "@utils/reportWebVitals";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
