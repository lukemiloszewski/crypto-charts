import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "@components";
import { Bitcoin, Home } from "@pages";

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
      </Routes>
    </React.Fragment>
  );
}
