import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
});

function ShowStar({ open, onClose }) {
  // const [open, setOpen] = useState(open)
  
// useEffect(() => {

// },[])

// const fetchStar = () => {
//     instance.get("")
// }

const [star, setStar] = useState({})
  return (
    <Modal
  
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modal}>
        {/* <p>{title}</p>
        <p>{content}</p> */}
        <Button variant="contained" onClick={onClose}>
          Close Modal
        </Button>
      </Box>
    </Modal>
  );
}

export default ShowStar;

const modal = {
    position: "absolute",
    backgroundColor:"#ffffffCC",

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
    fontFamily:"SpaceGrotesk"

  }