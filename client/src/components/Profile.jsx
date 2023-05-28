import React, { useState } from "react";
import {
    Box,
    Button,
    Modal,
    Typography,
    TextField,
} from "@mui/material";
import "../styles/modal.css";

function Profile() {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = (e) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            });
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData,
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
                    src={"../src/assets/astronaut.png"}
                    alt="dummy"
                    width="300vw"
                    height="300vw"
                    sx={image}

                />
                <Typography sx={text1}>username: minklim</Typography>
                <Typography sx={text2}>email: minklim47@gmail.com</Typography>
                <Typography sx={text3}>Change password</Typography>
                <box>
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
                </box>

            </box>

            <div style={{ width: "70%", marginBottom: "10px" }}>
                <Button sx={buttonStyle}>History</Button>
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
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",

    width: "120px",
    height: "120px",
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


