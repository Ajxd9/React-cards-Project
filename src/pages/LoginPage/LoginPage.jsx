import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
/* mui hooks */

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import CopyrightComponent from "./ui/CopyrightComponent";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import FormButtonComponent from "../../components/FormButtonComponent";
import LoginContext from "../../store/loginContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import {
  validateEmail,
  validatePassword,
} from "../../validation/loginValidation";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });

      const decoded = jwtDecode(data);
      console.log(data);
        localStorage.setItem("token", data);
      setLogin(decoded);

      toast.success("🦄 Logged-in successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate(ROUTES.HOME);
    } catch (err) {
      console.log("err from axios", err);
      toast.error("🦄 Log-in failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setLogin({ user: null, role: "" });
      localStorage.clear();
    }
  };

  const handleEmailBlur = () => {
    let dataFromJoi = validateEmail({ email: emailValue });
    console.log("dataFromJoi", dataFromJoi);
    if (dataFromJoi.error) {
      setEmailError(dataFromJoi.error.details[0].message);
    } else {
      setEmailError("");
    }
  };
  const handlePasswordBlur = () => {
    let dataFromJoi = validatePassword({ password: passwordValue });
    console.log("dataFromJoi", dataFromJoi);
    if (dataFromJoi.error) {
      setPasswordError(dataFromJoi.error.details[0].message);
    } else {
      setPasswordError("");
    }
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
              value={emailValue}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {emailError && <Alert severity="error">{emailError}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={passwordValue}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            {passwordError && <Alert severity="error">{passwordError}</Alert>}

            <FormButtonComponent
              type="submit"
              fullWidth
              variant="contained"
              shape="mt: 3, mb: 2 "
              disabled={emailError || passwordError}
            >
              Sign In
            </FormButtonComponent>
            <Grid container>
              <Grid item>
                <Link to={ROUTES.SIGNUP}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <CopyrightComponent sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
