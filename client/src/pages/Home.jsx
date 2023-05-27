import React, { useEffect, useState } from "react";
import Profile from "../components/profile";
import Star from "../components/Star";
import moon from "../assets/moonvec.png";
// import star from "../assets/star.png";
import Nav from "../components/Nav";
import { Box, Button, useMediaQuery } from "@mui/material";
import ShowStar from "../components/ShowStar";
import Axios from "axios";
const instance = Axios.create({
  withCredentials: true,
});

function Home() {
  //   const isScreenLessThan900px = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [starId, setStarId] = useState(-1);

  const handleOpen = (starId) => {
    console.log("first");
    localStorage.setItem("starId", starId)
    setStarId(localStorage.getItem("starId"));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //   const handleClick = (starId) => {
  //     // localStorage.setItem("starId", starId);

  //   };
  useEffect(() => {
    fetchStar();
  }, []);
  const fetchStar = async () => {
    await instance
      .get("http://localhost:8000/allstar")
      .then((res) => {
        console.log(res.data.data);
        setStars(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isLoading) {
    <div>Loading</div>;
  }
  return (
    <div>
      Home
      <Nav />
      <img style={moonStyle} src={moon} />
      <Box>
        {/* <img style={{ width: "40px" }} src={star} />
        <img style={{ width: "40px" }} src={star} />
        <img style={{ width: "40px" }} src={star} />
        <img style={{ width: "40px" }} src={star} /> */}

        {stars.map((star) => (
          <div onClick={()=>{handleOpen(star.id)}} key={star.id}>
            <Star key={star.id} star={star}  />
          </div>
        ))}
      </Box>
      {/* <Button sx={createStyle} onClick={handleOpen}>
        Create a Star
      </Button> */}
      <ShowStar starId={starId} open={open} onClose={handleClose} />
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
