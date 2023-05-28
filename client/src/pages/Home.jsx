import React, { useEffect, useState } from "react";
import Profile from "../components/profile";
import Star from "../components/Star";
import moon from "../assets/moonvec.png";
import "../styles/star.css";
import Nav from "../components/Nav";
import { Box, Button, useMediaQuery } from "@mui/material";
import ShowStar from "../components/ShowStar";
import CreateStar from "../components/CreateStar";
import Axios from "axios";
const instance = Axios.create({
  withCredentials: true,
});

function Home() {
  //   const isScreenLessThan900px = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [stars, setStars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [starId, setStarId] = useState(null);


  const handleClick = (starId) => {
    setStarId(starId);
    handleOpen();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenCreate = () => {
    setOpenCreate(true);
  };
  //   console.log(starId)
  const handleClose = () => {
    setOpen(false);
    setOpenCreate(false);
  };
    // const handleClick = (starId) => {

    // };
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
      <img className="moon" style={moonStyle} src={moon} />

      <Box
        sx={{
          position: "relative",
          left: "0",
          paddingTop: "90px",
          width: "500px",
          marginLeft: { sx: "0", md: "100px" },
        }}
      >
        <div
          id="star0"
          style={{ display: stars[0] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[0].id);
          }}
        >
          <Star />
        </div>
        <div
          id="star1"
          style={{ display: stars[1] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[1].id);
          }}
        >
          <Star />
        </div>
        <div
          id="star2"
          style={{ display: stars[2] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[2].id);
          }}
        >
          <Star />
        </div>
        <div
          id="star3"
          style={{ display: stars[3] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[3].id);
          }}
        >
          <Star />
        </div>
        <div
          id="star4"
          style={{ display: stars[4] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[4].id);
          }}
        >
          <Star />
        </div>
        <div
          id="star5"
          style={{ display: stars[5] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[5].id);
          }}
        >
          <Star />
        </div>{" "}
        <div
          id="star6"
          style={{ display: stars[6] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[6].id);
          }}
        >
          <Star />
        </div>{" "}
        <div
          id="star7"
          style={{ display: stars[7] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[7].id);
          }}
        >
          <Star />
        </div>{" "}
        <div
          id="star8"
          style={{ display: stars[8] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[8].id);
          }}
        >
          <Star />
        </div>{" "}
        <div
          id="star9"
          style={{ display: stars[9] == null ? "none" : "" }}
          onClick={() => {
            handleClick(stars[9].id);
          }}
        >
          <Star />
        </div>
        {/* {stars.map((star, index) => (
            <div
              style={{
                width: "40px",
                top: positions[index]?.top || 0,
                left: positions[index]?.left || 0,
              }}
              onClick={() => {
                handleClick(star.id);
              }}
              key={star.id}
            >
              <Star />
            </div>
          ))} */}
        {/* </Box> */}
      </Box>

      <Box>

      <h1>Click on the stars to see what's in there!</h1>

      <Button sx={createStyle} onClick={handleOpenCreate}>
        Create a Star
      </Button>
      </Box>
      <ShowStar starId={starId} open={open} onClose={handleClose} />
      <CreateStar open={openCreate} onClose={handleClose} />
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

  marginLeft: {
    xs: '50px',
    sm: '90px',
    md: '150px',
    lg: '150px',
    xl: '300px',
  },
  color: "#fffff",
  position: "absolute",
  bottom: "50px",
  width: {
    xs: '200px',
    sm: '300px',
    md: '500px',
  },
  height: "80px",
  bgcolor: "white",
  fontSize: "20px",
  fontWeight: "bold",
  borderRadius: "35px",
  background: "rgba(255, 255, 255, 0.5)",
  // sx: {
  //   // Responsive styles
  //   '@media (max-width: 600px)': {
  //     marginLeft: '100px',
  //     width: '180px',
  //   },
  //   '@media (min-width: 1200px)': {
  //     marginLeft: '20px',
  //     width: '670px',
  //   },
  //   '@media (min-width: 1539px)': {
  //     marginLeft: '20px',
  //     width: '770px',
  //   },
  // },

  textTransform: "none",
  color: "white",
  position: "absolute",
  bottom: "0",
  backgroundColor: "rgba(3, 21, 39, 0.8)",
  marginLeft: "50px",
  marginBottom: "20px",

};



