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
import SignupBox from "./components/signupBox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        {/* <Route path="profile" element={}/> */}
        <Route exact path="/signup" element={<SignupBox />} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
