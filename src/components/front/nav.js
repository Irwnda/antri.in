import React from "react";
import "./nav.scss";
import { Box, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export default function Nav() {
  let history = useHistory();

  function logout() {
    Cookies.remove("token");
    history.push("/login");
  }

  return (
    <>
      <Box
        sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0 }}
        elevation={3}
        className="nav"
        display={{ xs: "none", md: "block" }}
      >
        <Grid container spacing={2} align="center">
          <Grid item md className="menu">
            <Link to="/">Riwayat</Link>
            <Link to="/">Tentang</Link>
          </Grid>
          <Grid item md={4} align="center">
            <Link to="/" className="site-title">
              Antri.In
            </Link>
          </Grid>

          <Grid item md className="menu">
            <Link to="/dashboard2">Bantuan</Link>
            <div className="link" onClick={logout}>
              Akun Saya
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0 }}
        elevation={3}
        className="nav"
        display={{ xs: "block", md: "none" }}
      >
        <Grid container spacing={2} align="center">
          <Grid item align="center" style={{ margin: "0 auto" }}>
            <Link to="/" className="site-title">
              Antri.In
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} align="center">
          <Grid item xs className="menu">
            <Link to="/">Riwayat</Link>
            <Link to="/">Tentang</Link>
            <Link to="/dashboard">Bantuan</Link>
            <div className="link" onClick={logout}>
              Akun Saya
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
