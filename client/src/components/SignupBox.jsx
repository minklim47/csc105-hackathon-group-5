import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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
      <Typography sx={ signupstyle }>Sign up</Typography>
      <Box>
        <TextField
          label="Username"
          placeholder="Enter username"
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

      <div style={{ width: "70%",marginBottom: "20px" }}>
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
        <Typography sx={groupLogin}>
          Already have an account?
          <NavLink to="/SignIn"> Sign in</NavLink>
        </Typography>
      </Box>
    </Box>
    // </Modal>
  );
}

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


// const header = {
//   display: "flex",
//   fontWeight: "bold",
//   fontSize: "30px",
//   FontFamily: "",
//   color: "#1871A8",
// };

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

const signupstyle = {
  display: "flex",
  fontWeight: "bold",
  fontSize: "40px",
  color: "#1871A8",
  marginBottom: "20px"
}

// const groupInput = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// };

// const inputBox = {
//   marginTop: "10px",
//   width: "100%",
//   backgroundColor: "#38586B",
//   borderRadius: "20px",
// };

// const submit = {
//   color: "white",
//   padding: "10px",
//   backgroundColor: "#38586B",
//   width: "30%",
//   borderRadius: "20px",
// };

// const login = {
//   textDecoration: "underline",
//   lineHeight: "24px",
//   marginLeft: "5px",
// };

const groupLogin = {
  marginTop: "10px",
  justifyContent: "center",
  color: "#1871A8",
};

export default Signup;
