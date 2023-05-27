import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

function Profile() {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
      <div style={image}>
        </div>
        <Typography variant="h6" component="h2">
          Text in a modal
        </Typography>
        
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>

        <Button sx={buttonStyle}>
            History
        </Button>
        <Button sx={buttonStyle}>Log out</Button>
      </Box>
    </Modal>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90%", // Adjust the maximum width as a percentage
  width: "500px",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
    flexDirection:"column"
};
const image = {
    backgroundColor :"#000000",
    borderRadius:"50%",
    maxWidth: "10%",
    width:"150px",
    height:"50px",
}
const buttonStyle = {
    textTransform:"none",
    width:"70%"
}

export default Profile;
