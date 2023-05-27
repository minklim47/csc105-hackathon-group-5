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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />

        <Route exact path="/home" element={<Home />} />
        {/* <Route path="profile" element={}/> */}
        <Route exact path="/signup" element={<SignupBox />} />
        <Route exact path="/login" element={<Login/>}/>

        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
