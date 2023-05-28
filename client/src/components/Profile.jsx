import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import "../styles/modal.css";
import ast from "../assets/ast.png";
import Axios from "axios";
import Cookies from "js-cookie";
const instance = Axios.create({
  withCredentials: true,
});

function Profile() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const userToken = Cookies.get("user");
    if (userToken !== undefined && userToken !== "undefined") {
      instance
        .get(`http://localhost:8000/user/${userId}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((res) => {
          // console.log(res.data)
          setUserData(res.data);
          setName(res.data.name);
          setEmail(res.data.email_address);
          setLocation(res.data.location);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const handleSubmit = () => {
    instance
      .patch(
        "http://localhost:8000/edituser",
        { oldPassword: oldPassword, newPassword: newPassword },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const validateForm = () => {
    if (oldPassword == "" || newPassword == "" || confirmPassword == "") {
      console.log("Please fill all the forms");
    }
  };

  const handleDelete = () => {
    instance
    .delete(
      "http://localhost:8000/deleteuser",
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal" sx={modalStyle}>
        <img
          src={ast}
          alt="dummy"
          // width="300vw"
          // height="300vw"
          style={image}
        />
        <Typography sx={text1}>username:</Typography>
        <Typography sx={text2}>email:</Typography>
        <Typography sx={text3}>Change password</Typography>
        <Box>
          <TextField
            label="Old Password"
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
            }}
            onChange={(e) => {
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
          />
          <TextField
            label="New Password"
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
            }}
            onChange={(e) => {
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
          />
          <TextField
            label="Confirm New Password"
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
            }}
            onChange={(e) => {
              setUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
          />
        </Box>
        <div style={{ width: "70%", marginBottom: "10px" }}>
          <Button sx={buttonStyle} onClick={handleSubmit}>
            Confirm
          </Button>
        </div>
        <div style={{ width: "70%", marginBottom: "10px" }}>
          <Button sx={buttonStyle} onClick={handleDelete}>
            Delete Account
          </Button>
        </div>
        <div style={{ width: "70%", marginBottom: "10px" }}>
          <Button sx={buttonStyle}>Log out</Button>
        </div>
      </Box>
    </Modal>
  );
}

const text1 = {
  marginTop: "12px",
  marginBottom: "10px",
  fontSize: "20px",
  color: "#32A6EE",
};
const text2 = {
  marginBottom: "12px",
  fontSize: "20px",
  color: "#32A6EE",
};

const text3 = {
  marginBottom: "12px",
  fontSize: "20px",
  color: "white",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90%",
  width: "500px",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const image = {
  maxWidth: "400px",
  minWidth: "100px",
  maxHeight: "300px",
  // height: "50%",
  width: "50%",
};
const buttonStyle = {
  textTransform: "none",
  borderRadius: "30px",
  width: "100%",
  height: "50px",
  fontSize: "120%",
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
export default Profile;
