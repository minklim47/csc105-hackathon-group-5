import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
});

function ShowStar({ starId, open, onClose }) {
  // const [open, setOpen] = useState(open)
  const [star, setStar] = useState({});

  // console.log(starId)
  const fetchStar = async () => {
    await instance
      .get(
        `http://localhost:8000/star/${starId}`
        // {
        //   params: {
        //     starId: starId,
        //   },
        // }
      )
      .then((res) => {
        console.log(res.data.data[0]);
        setStar(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (open == true) {
      fetchStar();
    }
  }, [open]);

  console.log(star)
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modal}>
        <Box sx={boxdesign1}>
        <p>{star.name}</p>
        </Box>
        <Box sx={boxdesign2}>
        <p>{star.content}</p>
        </Box>
        {/* <Button variant="contained" onClick={onClose}>
          Close Modal
        </Button> */}
      </Box>
    </Modal>
  );
}

export default ShowStar;

const modal = {
  position: "absolute",
  backgroundColor: "#ffffffCC",

  top: "50%",
  left: "30%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%", // Adjust the maximum width as a percentage
  width: "400px",
  //   bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const text = {
  fontFamily: "SpaceGrotesk",
};

const boxdesign1 = {
  bgcolor: "white",
  maxWidth: "90%", // Adjust the maximum width as a percentage
  width: "300px",
  
  //   bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "10px"
  
}
const boxdesign2 = {
  bgcolor: "white",
  maxWidth: "90%", // Adjust the maximum width as a percentage
  width: "500px",
  //   bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "7px"

 
}
