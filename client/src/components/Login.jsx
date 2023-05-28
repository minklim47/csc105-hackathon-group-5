import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import "../styles/modal.css";
const instance = Axios.create({
  withCredentials: true,
});

function Login() {
  // const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputStyle = {
    // backgroundColor: "", // Set the desired background color
    color: "white", // Set the desired text color
    // borderColor:"white",
    borderColor: "white", // Set the desired border color
    borderWidth: "10px", // Set the desired border width if needed
    borderRadius: "5px",
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!validateForm()) {
      console.log("must enter all fields");
      return;
    }
    instance
      .post("http://localhost:8000/login", {email:email, password:password})
      .then((res) => {
        console.log(res.data.data.userId);
        if (res.data.success == "true"){
          navigate('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const validateForm = () => {
    if (email == "" || password == "") {
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
      <Typography sx={loginstyle}>Login</Typography>
      <Box>
        <TextField
          label="email"
          placeholder="Enter email address"
          type="email"
          sx={{
            width: "100%",
            marginBottom: "20px",
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderRadius: "30px",
                borderColor: "White",
              },
            },
          }}
          inputProps={{
            maxLength: 65,
            style: inputStyle,
          }}
          variant="outlined"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="password"
          type="password"
          placeholder="Enter password"
          sx={{
            width: "100%",
            marginBottom: "20px",
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderRadius: "30px",
                borderColor: "White",
              },
            },
          }}
          variant="outlined"
          value={password}
          inputProps={{
            maxLength: 65,
            style: inputStyle,
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>

      <div style={{ width: "70%", marginBottom: "20px" }}>
        <Button sx={buttonStyle} onClick={handleSubmit}>
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
        
        <Typography sx={groupSignup}>
          Don't have an account?
          <NavLink to="/SignUp"> Sign up</NavLink>
        </Typography>
      </Box>
    </Box>
    // </Modal>
  );
}

export default Login;

const groupSignup = {
  color: "#1871A8",
};

const loginstyle = {
  display: "flex",
  fontWeight: "bold",
  fontSize: "40px",
  color: "#1871A8",
  marginBottom: "20px",
};

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
