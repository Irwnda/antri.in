import React from "react";
import { Box, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import Cookies from "js-cookie";

export default function Nav() {
  let history = useHistory();

  function logout() {
    Cookies.remove("token");
    history.push("/login-admin");
  }
  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0 }}
      elevation={3}
      className="dashboard-nav"
    >
      <Grid container spacing={2} align="center">
        <Grid item xs className="menu">
          <Link to="/table">Riwayat</Link>
          <Link to="/laporan2">Antrian</Link>
        </Grid>
        <Grid item xs={2} align="center">
          <Link to="/dashboard" className="site-title">
            Antri.In
          </Link>
        </Grid>

        <Grid item xs className="menu">
          <Link to="/">Laporan</Link>
          <div className="link" onClick={logout}>
            Logout
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
