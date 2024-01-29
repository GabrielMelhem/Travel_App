import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    if (email && password) {
      login(email, password);
      console.log("Login successful");
      console.log("email, password :>> ", email, password);
      navigate(`/`);
    } else {
      console.log("Login failed");
    }
  };

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   rememberMe: false,
  // });

  // const [errors, setErrors] = useState({
  //   email: "",
  //   password: "",
  // });

  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = { email: "", password: "" };

  //   if (!formData.email) {
  //     newErrors.email = "Email is required";
  //     valid = false;
  //   }

  //   // Password strength check
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  //   if (!formData.password || !passwordRegex.test(formData.password)) {
  //     newErrors.password =
  //       "Password must be at least 6 characters with at least one uppercase and one lowercase letter";
  //     valid = false;
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     login(formData.email, formData.password);
  //     console.log("Login successful");
  //     console.log("email, password :>> ", formData.email, formData.password);
  //   } else {
  //     console.log("Login failed");
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: name === "rememberMe" ? checked : value,
  //   });
  // };

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
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* //----------------------- */}
      {/* <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          margin="normal"
          sx={{ mt: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.rememberMe}
              onChange={handleChange}
              name="rememberMe"
              color="primary"
            />
          }
          label="Remember Me"
          sx={{ mt: 1, textAlign: "left" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
          <Box mt={1}>
            <Link href="#" variant="body2">
              Don't have an account? Register
            </Link>
          </Box>
        </Box>
      </Box> */}
      {/* //------------------- */}
      {/* <form onSubmit={handleLogin}>
          <input type="text" id="email" onChange={handleEmailChange} />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            id="password"
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">Password</label>
          <button type="submit">Login</button>
        </form>  */}
    </>
  );
};

export default Login;
