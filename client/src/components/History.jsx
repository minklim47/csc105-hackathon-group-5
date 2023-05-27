import { Box, Typography } from "@mui/material";
import Axios from "axios";
import "../styles/modal.css"

function History(){
    return(
    //      <Modal
    //   open={open}
    //   onClose={onClose}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    <Box className="modal" sx={modalStyle}>
    <Box >
    <Typography sx={historytext}>History</Typography>
    </Box>
    <Box sx={box1}>
    1871A8   
    </Box>
    <Box sx={box1}>
    1871A8
    </Box>

   
    </Box>
    
   


    // </Modal>
    )
}

export default History;


  
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
}
 const box1 = {
    bgcolor: "#1871A8",
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
    marginBottom: "15px"
 }

 const historytext = {
    display: "flex",
    fontWeight: "bold",
    fontSize: "40px",
    color: "#1871A8",
    marginBottom: "20px",
    fontFamily: "Space Grotesk, sans-serif"
 }