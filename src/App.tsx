import React from "react";
import { Routes, Route } from "react-router-dom";

import { Bitcoin, Home } from "@pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bitcoin" element={<Bitcoin />} />
    </Routes>
  );
}
