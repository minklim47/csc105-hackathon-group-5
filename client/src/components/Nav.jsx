import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { alpha } from "@mui/system";
import Profile from "./profile";

function Nav() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    handleOpen();
  };
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <AppBar
      position="static"
      sx={navBarStyle}
      elevation={0}
      //  sx={navBarStyle}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "90px",
        }}
      >
        <Button
          component={NavLink}
          sx={{ borderRadius: "15px", bgcolor: "white.main" }}
        >
          <Box
            component="img"
            sx={{
              width: "90px",
            }}
            alt="logo"
            src={logo}
          />
        </Button>

        <Button
          component={NavLink}
          // to={`/Profile/${userId}`}
          onClick={handleClick}
          color="inherit"
          sx={navButtonStyle}
        >
          Profile
        </Button>
      </Toolbar>
      <Profile open={open} onClose={handleClose} />
    </AppBar>
  );
}

export default Nav;
const navBarStyle = {
  backgroundColor: "transparent",
  padding: "0px",
  position: "fixed",
  top: "0",
  zIndex: "10",
};

const navButtonStyle = {
  textTransform: "none",
  fontSize: 18,
  backgroundColor: "white.main",
  color: "black.main",
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
    bgcolor: "black.main",
    height: "3px",
    width: "0",
    bottom: "7px",
    transition: "0.3s",
  },
};
