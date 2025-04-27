import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Level1 } from "../components/Level1";
import { Level2 } from "../components/Level2";
import { Level3 } from "../components/Level3";
import { Level4 } from "../components/Level4";
import { Level5 } from "../components/Level5";
import { Home } from "../components/Home";
import { Header } from "../components/Header";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header className="Header_title"/> {/* Estará siempre presente, arriba de todas las rutas */}
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Level1" element={<Level1 />} />
          <Route path="/Level2" element={<Level2 />} />
          <Route path="/Level3" element={<Level3 />} />
          <Route path="/Level4" element={<Level4 />} />
          <Route path="/Level5" element={<Level5 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
