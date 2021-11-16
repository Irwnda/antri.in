import React from "react";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.scss";
export default function Nav() {
  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0 }}
      elevation={3}
      className="dashboard-nav"
    >
      <Grid container spacing={2} align="center">
        <Grid item xs className="menu">
          <Link to="/">Riwayat</Link>
          <Link to="/">Antrian</Link>
        </Grid>
        <Grid item xs={2} align="center">
          <Link to="/" className="site-title">
            Antri.In
          </Link>
        </Grid>

        <Grid item xs className="menu">
          <Link to="/">Laporan</Link>
          <Link to="/">Akun</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
