import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { alpha } from '@mui/system';

function Nav() {
  return (
    <AppBar position="static"
    sx={navBarStyle} elevation={0}
    //  sx={navBarStyle} 
     >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "90px",
        // backgroundColor: "alpha('#000000', 0.5)"

        }}
      >
        <Button
          component={NavLink}
        //   to={`/Home/${userId}`}
          sx={{ borderRadius: "15px", bgcolor: "white.main" }}
        >
          <Box
            component="img"
            sx={{
             
                width:"110px",
                marginTop:"15px"
            }}
            alt="logo"
            src={logo}
          />
        </Button>
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ display: { xs: "none", sm: "inherit" } }}
        >
          <Button
            component={NavLink}
            // to={`/Profile/${userId}`}
            // onClick={handleProfileClick}
            color="inherit"
            sx={navButtonStyle}
          >
            Profile
          </Button>
        </Stack>

        {/* ==============DRAWER=============== */}
        <IconButton
          sx={{ color: "black.main", display: { xs: "inherit", sm: "none" } }}
        //   onClick={toggleDrawer(true)}
        >
          {/* <MenuIcon /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
const navBarStyle = {
    backgroundColor:"transparent",
    padding: "0px",
    position:"fixed",
    top:"0",
    zIndex:"10",
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
  
