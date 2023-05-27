import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import "../styles/modal.css";

function Profile() {
  return (
    // <Modal
    //   open={true}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    <Box className="modal-profile" sx={modalStyle}>
      <div style={image}></div>
      <Typography className="modal-text" >
        username: minklim
      </Typography>
      <Typography className="modal-text" >
        email: minklim47@gmail.com
      </Typography>
        <div style={{width:"70%"}}>
        <Button sx={buttonStyle}>History</Button>
      <Button sx={buttonStyle}>Log out</Button>
        </div>
    
    </Box>
    // </Modal>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
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
};
const image = {
  backgroundColor: "#FFFFFF",
  borderRadius: "50%",

  width: "120px",
  height: "120px",
};
const buttonStyle = {
  textTransform: "none",
  width: "100%",
  textAlign:"center"
};

export default Profile;
