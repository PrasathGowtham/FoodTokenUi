import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Tooltip } from "@mui/material"
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../globalconstant";
function Signup() {
    const [text, setText] = useState("Show");
    const [visible, setVisible] = useState("password");
    const icon =
        visible === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />;
    const visibility = () => {
        setVisible((visible) => (visible === "password" ? "text" : "password"));
        setText((text) => (text === "Show" ? "Hide" : "Show"));
    };
    const navigate = useNavigate();
    const formdata = { name: "", email: "", password: "", confirmpassword: "" };
    const [data, setdata] = useState(formdata)
    const handelchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const handelSubmit = async (e) => {

        e.preventDefault();
        try {
            const responce = await axios.post(`${API_URL}/signup`, { ...data });
            console.log(responce)
            if (responce) {
                setdata({
                    name: "", email: "", password: "", confirmpassword: ""
                })
                navigate("/")
                
            }
        } catch (err) {
            console.log(err)
            alert("Alredy registred")
        }
    }
    return (
        <div className="signuppage">
            <div>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Aladin",
                        fontSize: { sm: "50px", xs: "40px" },

                    }}
                >
                    <span style={{ color: 'red' }}>Token</span><span style={{ color: 'azure' }}>Generator</span>
                </Typography>
            </div>

            <div>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="formcontainer">
                        <h2>Signup</h2>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            name='name'
                            value={data.name}
                            onChange={handelchange}
                        />
                        <br />
                        <TextField
                            id="outlined-password-input"
                            name='email'
                            label="Email"
                            type="email"
                            autoComplete=""
                            value={data.email}
                            onChange={handelchange}
                        /><br />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                        <Tooltip title={text}>
                                            <IconButton onClick={() => visibility()}>
                                                {icon}
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                ),
                            }}
                            id="outlined-password-input"
                            variant="outlined"
                            name='password'
                            value={data.password}
                            label=" Password"
                            type={visible}
                            autoComplete="current-password"
                            onChange={handelchange}
                        /><br />
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                        <Tooltip title={text}>
                                            <IconButton onClick={() => visibility()}>
                                                {icon}
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                ),
                            }}
                            id="outlined-password-input"
                            variant="outlined"
                            label="Confirm Password"
                            name='confirmpassword'
                            value={data.confirmpassword}
                            type={visible}
                            onChange={handelchange}
                            autoComplete="current-password"
                        /><br />
                        <Button variant="contained" href="#contained-buttons" onClick={handelSubmit}>
                            Signup
                        </Button>
                        <p>or</p>
                        <Button variant="contained" href="#contained-buttons" onClick={() => navigate("/")}>
                            Login
                        </Button>
                    </div>
                </Box>
            </div>


        </div >
    )
}

export default Signup;