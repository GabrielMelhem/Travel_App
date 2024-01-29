import React from 'react'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    register(email, password);
    navigate(`/login`);
  };

  return (
    <>
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleRegister}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    {/* //------------------ */}
    {/* <h1>Register</h1>
    <form onSubmit={handleRegister}>
      <input type='text' id='email' onChange={handleEmailChange}/>
      <label htmlFor='email'>Email</label>
      <input type='password' id='password' onChange={handlePasswordChange}/>
      <label htmlFor='password'>Password</label>
      <button type='submit'>Register</button>
    </form> */}
    </>
    
  )
}

export default Register