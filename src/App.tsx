import React from "react";
import { Routes, Route } from "react-router-dom";

import { Bitcoin, Home } from "@pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bitcoin" element={<Bitcoin />} />
      {/* <Route path="/bitcoin" element={<Chart width={1000} height={500} />} /> */}
    </Routes>
  );
}
