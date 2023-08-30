import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import Fiche from "./pages/Fiche";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
          <Route path="/projet/:id" element={<Fiche />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
