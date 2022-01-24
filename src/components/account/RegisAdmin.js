import React from "react";
import DoctorImage from "../../img/online-doctor.png";

import "./register.scss";
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
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";

function RegisAdmin() {
  let history = useHistory();

  if (Cookies.get("token") !== undefined) {
    history.push("/dashboard");
  }

  const [values, setValues] = React.useState({
    email: "",
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

  const url = "/api/admins";

  function register() {
    Axios.post(url, values)
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 1 });
        history.push("/dashboard");
        // else history.push("/admin");
      })
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="base-container">
      <Grid container spacing={2}>
        <Box
          component={Grid}
          item
          md={6}
          display={{ xs: "none", md: "block" }}
          className="image"
        >
          <img src={DoctorImage} alt="" />
        </Box>
        <Grid item xs={12} md={6}>
          <div className="header">
            <h2>Selamat Datang</h2>
            <h4>Sign in untuk mengakses Antri.in</h4>
          </div>
          <div align="center">
            <TextField
              label="Email"
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
              value={values.email}
              onChange={handleChange("email")}
            />

            <TextField
              label="Username"
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
                      {values.showPassword ? (
                        <VisibilityOutlined />
                      ) : (
                        <VisibilityOffOutlined />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <div className="clearfix"></div>

            <ColorButton
              variant="contained"
              sx={{ backgroundColor: "#51C296 !important" }}
              onClick={register}
            >
              Sign Up
            </ColorButton>
            <p>
              Sudah memiliki akun?{" "}
              <Link to="/login-admin" style={{ color: "#F9B75D" }}>
                Sign In
              </Link>
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegisAdmin;
