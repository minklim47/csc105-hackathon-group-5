import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../styles/modal.css";
import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
});
function CreateStar() {
  const [star, setStar] = useState({type:"support"});

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
    // <Modal
    //   open={true}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    <Box className="modal" sx={modalStyle}>
      <Box>
        <TextField
          className="modal-text"
          id="outlined-multiline-static"
          multiline
          rows={1}
          placeholder="Note Title"
          sx={{ width: "100%", marginBottom: "20px" }}
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
          id="outlined-multiline-static"
          multiline
          minRows={4}
          maxRows={12}
          placeholder="Write your note here..."
          sx={{ width: "100%", borderColor: "#fffff" }}
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
        <div>
          <label style={{ color: "#fffff" }}>
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
      </Box>

      <div style={{ width: "70%" }}>
        <Button sx={buttonStyle} onClick={handleSubmit}>Create Star</Button>
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
  textAlign: "center",
  color: "#ffffff",
  backgroundColor: "#ff8321",
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
