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
  const [starId, setStarId] = useState(null);

  const handleClick = (starId) => {
    // localStorage.setItem("starId", starId);
    setStarId(starId);
    handleOpen();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  //   console.log(starId)
  const handleClose = () => {
    setOpen(false);
  };
  //   const handleClick = (starId) => {

  //   };
  useEffect(() => {
    fetchStar();
  }, []);
  const fetchStar = async () => {
    await instance
      .get("http://localhost:8000/star")
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
      <Nav />
      <img style={moonStyle} src={moon} />
      <Box sx={{marginTop:"90px"}}>
        {stars.map((star) => (
          <div
            style={{ width: "40px" }}
            onClick={() => {
              handleClick(star.id);
            }}
            key={star.id}
          >
            <Star />
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
