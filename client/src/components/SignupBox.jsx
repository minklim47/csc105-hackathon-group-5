
import React, { useState } from "react";
import { Box, Modal, Typography, Button, TextField } from "@mui/material";
import "../styles/modal.css"
const signupBox = () => {
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal" sx={modalStyle}>
        <Typography sx={header}>Sign up</Typography>
        <Box sx={groupInput}>
          <TextField sx={inputBox}> </TextField>
          <TextField sx={inputBox}> </TextField>
          <TextField sx={inputBox}> </TextField>
          <TextField sx={inputBox}> </TextField>
        </Box>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        <Button sx={submit}>sign up</Button>
        <Box sx={groupLogin}>
          <Typography> Already have an account yet? </Typography>
          <Typography sx={login}>Log in</Typography>
        </Box>

import { NavLink } from "react-router-dom";
import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
});

function Signup() {
  const [user, setUser] = useState({});
  const inputStyle = {
    // backgroundColor: "", // Set the desired background color
    color: "white", // Set the desired text color
    // borderColor:"white",
    borderColor: "white", // Set the desired border color
    borderWidth: "10px", // Set the desired border width if needed
    borderRadius: "5px",
  };

  const handleSubmit = () => {
    if (!validateForm()){
        console.log("must enter all fields");
        return;
    }
    instance.post("http://localhost:8000/signin", [user])
    .then((res) => {console.log(res)}).catch((err) => {
        console.log(err)
    })
  };
  const validateForm = () => {
    if (user.username == "" || user.password == "") {
      return false;
    } else {
      return true;
    }
  };
  return (
    // <Modal
    //   open={true}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    <Box className="modal" sx={modalStyle}>
      <Typography>Sign up</Typography>
      <Box>
        <TextField
          label="Username"
          placeholder="Enter username"
          sx={{ width: "100%", marginBottom: "20px" }}
          inputProps={{
            maxLength: 65,
            style: inputStyle,
          }}
          variant="outlined"
          onChange={(e) => {
            setUser((prevState) => ({
              ...prevState,
              username: e.target.value,
            }));
          }}
        />
         <TextField
          label="Email"
          placeholder="Enter password"
          sx={{ width: "100%", borderColor: "#fffff" }}
          variant="outlined"
          // value={note.content}
          inputProps={{
            maxLength: 65,
            style: inputStyle,
          }}
          onChange={(e) => {
            setUser((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          sx={{ width: "100%", borderColor: "#fffff" }}
          variant="outlined"
          // value={note.content}
          inputProps={{
            maxLength: 65,
            style: inputStyle,
          }}
          onChange={(e) => {
            setUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
         <TextField
          label="Confirm password"
          placeholder="Enter confirm password"
          sx={{ width: "100%", borderColor: "#fffff" }}
          variant="outlined"
          // value={note.content}
          inputProps={{
            maxLength: 65,
            style: inputStyle,
          }}
          onChange={(e) => {
            setUser((prevState) => ({
              ...prevState,
              confirmPassword: e.target.value,
            }));
          }}
        />

      </Box>

      <div style={{ width: "70%" }}>
        <Button
          sx={buttonStyle}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          Already have an account?
          <NavLink to="/SignIn"> Sign in</NavLink>
        </Typography>
      </Box>
    </Box>
    // </Modal>
  );
}

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


const header = {
  display: "flex",
  fontWeight: "bold",
  fontSize: "30px",
  FontFamily: "",
  color: "#1871A8",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  maxWidth: "90%", // Adjust the maximum width as a percentage
  width: "500px",
  // bgcolor: "background.paper",

  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const groupInput = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const inputBox = {
  marginTop: "10px",
  width: "100%",
  backgroundColor: "#38586B",
  borderRadius: "20px",
};

const submit = {
  color: "white",
  padding: "10px",
  backgroundColor: "#38586B",
  width: "30%",
  borderRadius: "20px",
};

const login = {
  textDecoration: "underline",
  lineHeight: "24px",
  marginLeft: "5px",
};

const groupLogin = {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: { xs: "column", sm: "row" },
  color: "#1871A8",
};

export default Signup;
