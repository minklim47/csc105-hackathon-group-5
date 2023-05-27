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
import Profile from "./components/profile";
import History from "./components/History";

import SpaceGrotesk from '../src/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf';
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: ["", "cursive"].join(","),
    typography: {
      fontFamily: [
        'SpaceGrotesk',
       
      ].join(','),
    },
  },
});
function App() {
  return (
  <ThemeProvider theme={theme}>

    <BrowserRouter>
      {/* <ParticleBackground/> */}
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/create-star" element={<CreateStar />} />
        {/* <Route path="profile" element={}/> */}
        <Route exact path="/signup" element={<SignupBox />} />
        <Route />
        {/* <Route path="profile" element={}/> */}

        <Route exact path="/signup" element={<SignupBox />} />

        {/* <Route exact path="/login" element={<Login/>}/> */}
<<<<<<< Updated upstream
        <Route exact path="/history" element={<History />} />
      
=======

         
>>>>>>> Stashed changes

      
        <Route exact path="/login" element={<Login/>}/>



        <Route />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
