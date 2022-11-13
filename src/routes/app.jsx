import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fotosleila from "../pages/photos/app";
import Home from "../pages/home/app";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fotos" element={<Fotosleila />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
