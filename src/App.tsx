import React from "react";
import { Routes, Route } from "react-router-dom";

import { Bitcoin, Ethereum, Home } from "@pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/btc" element={<Bitcoin />} />
      <Route path="/eth" element={<Ethereum />} />
    </Routes>
  );
}
