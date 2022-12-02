import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Tooltip } from "@mui/material"
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {API_URL} from "../globalconstant";
function Login() {
    const [text, setText] = useState("Show");
    const [visible, setVisible] = useState("password");
    const icon =
        visible === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />;
    const visibility = () => {
        setVisible((visible) => (visible === "password" ? "text" : "password"));
        setText((text) => (text === "Show" ? "Hide" : "Show"));
    };
    const navigate = useNavigate();

    const formdata = { email: "", password: "", error: { email: "", password: "" } };
    const [data, setdata] = useState(formdata)
    const handelchange = (e) => {
        let error = { ...data.error };
        if (e.target.value === "") {
            error[e.target.name] = `${e.target.name} is Required`;
        } else {
            error[e.target.name] = "";
        }
        setdata({ ...data, [e.target.name]: e.target.value, error });
    };
    const handelSubmit = async (e) => {

        e.preventDefault();
        try {
            const responce = await axios.post(`${API_URL}/signin`, { ...data });
            if (responce) {
                sessionStorage.setItem("token", responce);
                navigate("/home");
            }
        }

        catch (err) {
            console.log(err)
        alert("Invalid user")
        }

        if (data === "") {
            navigate("/");
        }

    };

    return (
        <div className="loginpage">
            <div>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Aladin",
                        fontSize: { sm: "50px", xs: "40px" },

                    }}
                >
                    <span style={{ color: "black" }}> Food Token</span><span style={{ color: 'orange' }}>Generator</span>
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
                        <h2>Login</h2>
                        <TextField
                            required
                            id="outlined-required"
                            name='email'
                            value={data.email}
                            label="Email"
                            defaultValue="email@gmail.com"
                            onChange={handelchange}

                        />

                        <br />
                        <span style={{ color: "red" }}>{data.error.email}</span>
                        <br />
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
                        <span style={{ color: "red" }}>{data.error.password}</span>
                        <br />
                        <Button variant="contained" href="#contained-buttons" onClick={handelSubmit}>
                            Login
                        </Button>
                        <p>did't have an account?</p>
                        <Button variant="contained" href="#contained-buttons" onClick={() => navigate("/signup")}>
                            Signup
                        </Button>
                    </div>
                </Box>
            </div>


        </div >
    )
}

export default Login;