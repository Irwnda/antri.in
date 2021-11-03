import React from "react";
import DoctorImage from "../../img/online-doctor.png";
import "./login.scss";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Box,
  Button,
  FilledInput,
  Grid,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  styled,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Login() {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#51C296",
    marginBottom: "1.5rem",
    marginTop: "40px",
    width: "80%",
    maxWidth: "500px",
    padding: ".5rem",
    "&:hover": {
      backgroundColor: "#51d596",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }} className="base-container">
      <Grid container spacing={2}>
        <Grid item xs={0} md={6} className="image">
          <img src={DoctorImage} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="header">
            <h2>Selamat Datang</h2>
            <h4>Sign in untuk mengakses Antri.in</h4>
          </div>
          <div align="center">
            <TextField
              label="Username atau email"
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
              value={values.username}
              onChange={handleChange("username")}
            />

            <FormControl
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <p className="lupa-password">
              <Link
                to="#"
                style={{
                  color: "#F9B75D",
                  float: "right",
                  marginTop: "20px",
                }}
              >
                Lupa password?
              </Link>
            </p>
            <div className="clearfix"></div>
            <ColorButton variant="contained">Sign In</ColorButton>
            <p>
              Belum memiliki akun?{" "}
              <Link to="/register" style={{ color: "#F9B75D" }}>
                Sign Up
              </Link>
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
