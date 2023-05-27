import React from "react";
import { Box, Modal, Typography, Button, TextField } from "@mui/material";

const signupBox = () => {
    return (
        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography sx={header}>Sign up</Typography>
                <Box sx={groupInput}>
                    <TextField sx={inputBox}> </TextField>
                    <TextField sx={inputBox}> </TextField>
                    <TextField sx={inputBox}> </TextField>
                </Box>

                <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                ></Typography>
                <Button sx={submit}>sign up</Button>
                <Box sx={groupLogin}>
                    <Typography> Already have an account yet? </Typography>
                    <Typography sx={login}>Log in</Typography>
                </Box>
            </Box>
        </Modal>
    );
};

const header = {
    display: "flex",
    fontWeight: "bold",
    fontSize: "30px",
    FontFamily: "",
};

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    width: "500px",
    bgcolor: "background.paper",
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
};

const submit = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
};

const login = {
    textDecoration: 'underline',
    lineHeight: "24px",
    marginLeft: "5px",
};

const groupLogin = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "row" },
};

export default signupBox;
