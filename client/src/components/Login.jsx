import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
});

function Login() {
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
    instance.post("http://localhost:8000/login", [user])
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
      <Typography>Login</Typography>
      <Box>
        <TextField
          label="username"
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
              title: e.target.value,
            }));
          }}
        />
        <TextField
          label="password"
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
              content: e.target.value,
            }));
          }}
        />
      </Box>

      <div style={{ width: "70%" }}>
        <Button
          sx={buttonStyle}
          onClick={handleSubmit}
        >
          Login
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
          <NavLink to="/ForgotPassword">Forgot password?</NavLink>
        </Typography>
        <Typography>
          Don't have an account?
          <NavLink to="/SignUp"> Sign up</NavLink>
        </Typography>
      </Box>
    </Box>
    // </Modal>
  );
}

export default Login;

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