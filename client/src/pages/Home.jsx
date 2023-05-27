import React, { useEffect, useState } from "react";
import Profile from "../components/profile";
import Star from "../components/Star";
import moon from "../assets/moonvec.png";
import star from "../assets/star.png";
import Nav from "../components/Nav";
import { Box, Button, useMediaQuery } from "@mui/material";
import ShowStar from "../components/ShowStar";
import Axios from "axios";



function Home() {
  const isScreenLessThan900px = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState([]);
  const instance = Axios.create({
    withCredentials: true,
  });
  // const handleCreate = () => {
  //     setOpen(!prevState);
  // }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchStar();
  }, []);
  const fetchStar = async () => {
    await instance
      .get("http://localhost:8000/allstar")
      .then((res) => {
        console.log(res.data);
        // setStar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      Home
      <Nav />
      <img style={moonStyle} src={moon} />
      <Box>
        <img style={{ width: "40px" }} src={star} />
        <img style={{ width: "40px" }} src={star} />
        <img style={{ width: "40px" }} src={star} />
        <img style={{ width: "40px" }} src={star} />
      </Box>
      <Button sx={createStyle} onClick={handleOpen}>
        Create a Star
      </Button>
      <ShowStar open={open} onClose={handleClose} />
    </div>
  );
}

export default Home;

const moonStyle = {
  alignSelf: "center",
  position: "fixed",
  maxWidth: "800px",
  width: "70%",
  minWidth: "400px",
  right: "-200px",
  bottom: "-350px",
  // transform: translateX(-50%);
  zIndex: "10",
};

const createStyle = {
  color: "#fffff",
  position: "absolute",
  bottom: "0",
};
