import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/modal.css";
import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
});
function CreateStar({ open, onClose }) {
  const [star, setStar] = useState({ type: "support" });

  const inputStyle = {
    // backgroundColor: "", // Set the desired background color
    color: "white", // Set the desired text color
    // borderColor:"white",
    borderColor: "white", // Set the desired border color
    borderWidth: "10px", // Set the desired border width if needed
    borderRadius: "5px",
  };

  const handleSubmit = () => {
    instance
      .post("http://localhost:8000/createstar", { star })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal" sx={modalStyle}>
        <div style={{ marginBottom: "30px" }}>
          <label style={{ color: "#fffff", marginRight: "70px" }}>
            support
            <input
              type="radio"
              value="support"
              checked={star.type === "support"}
              onChange={(e) => {
                setStar((prevState) => ({
                  ...prevState,
                  content: e.target.value,
                }));
              }}
            />
          </label>
          <label style={{ color: "#fffff" }}>
            seek
            <input
              type="radio"
              value="seek"
              checked={star.type === "seekt"}
              onChange={(e) => {
                setStar((prevState) => ({
                  ...prevState,
                  content: e.target.value,
                }));
              }}
            />
          </label>
        </div>

        <Box>
          <TextField
            className="modal-text"
            id="outlined-multiline-static"
            multiline
            rows={1}
            placeholder="Note Title"
            sx={{
              width: "100%",
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                "&  fieldset": { borderRadius: "30px", borderColor: "White" },
              },
            }}
            // value={note.title}

            inputProps={{
              maxLength: 65,
              style: inputStyle,
            }}
            variant="outlined"
            onChange={(e) => {
              setStar((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
            }}
          />
          <TextField
            className={`modal-text white-border-radius`}
            id="outlined-multiline-static"
            multiline
            minRows={4}
            maxRows={12}
            placeholder="Write your note here..."
            sx={{
              width: "100%",
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderRadius: "30px", borderColor: "White" },
              },
            }}
            variant="outlined"
            // value={note.content}
            inputProps={{
              maxLength: 65,
              style: inputStyle,
            }}
            onChange={(e) => {
              setStar((prevState) => ({
                ...prevState,
                content: e.target.value,
              }));
            }}
          />
        </Box>

        <div style={{ width: "70%" }}>
          <Button sx={buttonStyle} onClick={handleSubmit}>
            Create Star
          </Button>
        </div>
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
  //   bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const buttonStyle = {
  textTransform: "none",
  borderRadius: "30px",
  width: "100%",
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#38586B",
  "&:hover": {
    backgroundColor: "white.main",
    "&::after": {
      width: "70%",
    },
  },
  "&.active": {
    "&::after": {
      width: "70%",
    },
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bgcolor: "",
    height: "3px",
    width: "0",
    bottom: "7px",
    transition: "0.3s",
  },
};

export default CreateStar;
