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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
