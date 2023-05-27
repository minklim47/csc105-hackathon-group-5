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

import ParticleBackground from "./particles/ParticleBackground";
import SignupBox from "./components/signupBox";
import CreateStart from "./components/CreateStar";
import CreateStar from "./components/CreateStar";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      {/* <ParticleBackground/> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create-star" element={<CreateStar />} />
        {/* <Route path="profile" element={}/> */}
        <Route exact path="/signup" element={<SignupBox />} />
        <Route />
        {/* <Route path="profile" element={}/> */}

        <Route exact path="/signup" element={<SignupBox />} />
        {/* <Route exact path="/login" element={<Login/>}/> */}

        <Route exact path="/login" element={<Login />} />

        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
