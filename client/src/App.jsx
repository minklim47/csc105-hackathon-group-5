import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ParticleBackground  from "./particles/ParticleBackground";

function App() {
  return (
    <BrowserRouter>
    {/* <ParticleBackground/> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        {/* <Route path="profile" element={}/> */}
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
