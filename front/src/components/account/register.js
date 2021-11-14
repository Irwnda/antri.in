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
import { Link } from "react-router-dom";

function getDate() {
  let date = new Date();
  return (
    date.getFullYear().toString() +
    "-" +
    (date.getMonth() + 1).toString() +
    "-" +
    (date.getDate() + 1).toString()
  );
}
export default function Register() {
  const [values, setValues] = React.useState({
    email: "",
    username: "",
    noTelp: "",
    alamat: "",
    tglLahir: getDate(),
    password: "",
    confirmPassword: "",
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

            <TextField
              label="Nama"
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
              value={values.nama}
              onChange={handleChange("nama")}
            />

            <TextField
              label="Nomor Telepon"
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
              value={values.noTelp}
              onChange={handleChange("noTelp")}
            />

            <TextField
              label="Alamat"
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
              value={values.alamat}
              onChange={handleChange("alamat")}
            />

            <TextField
              label="Tanggal Lahir"
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              type="date"
              className="form-input"
              value={values.tglLahir}
              onChange={handleChange("tglLahir")}
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

            <FormControl
              sx={{ m: 1, width: "80%", maxWidth: "500px" }}
              variant="filled"
              className="form-input"
            >
              <InputLabel htmlFor="filled-adornment-password-conf">
                Konfirmasi Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password-conf"
                type={values.showPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
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
            >
              Sign Up
            </ColorButton>
            <p>
              Sudah memiliki akun?{" "}
              <Link to="/login" style={{ color: "#F9B75D" }}>
                Sign In
              </Link>
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
