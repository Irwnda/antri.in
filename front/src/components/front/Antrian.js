import React from "react";
import listAntrian from "./listAntrian.json";
import Nav from "./nav";
import "./style.scss";
import { Box, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export default function antrian() {
  let list = [];
  listAntrian.forEach((antrian) => {
    let bgColor;
    if (antrian.status === "Sudah Diperiksa") bgColor = "#F4F1B1";
    else if (antrian.status === "Batal") bgColor = "#FF8541";
    else if (antrian.status === "Belum Hadir") bgColor = "#BD9EAD";
    else if (antrian.status === "Sedang Diperiksa") bgColor = "#85D1F1";
    else bgColor = "#FFD7F6";

    list.push(
      <Card className="detailAntrian" key={antrian.nomor}>
        <CardContent sx={{ backgroundColor: bgColor }} className="container">
          <div className="nomor">{antrian.nomor}</div>
          <div className="info">{antrian.status}</div>
        </CardContent>
      </Card>
    );
  });
  return (
    <div className="antrian">
      <Nav />

      <Link
        to="./"
        style={{
          marginLeft: "2rem",
          textDecoration: "none",
          color: "#132F3A",
        }}
      >
        &lt;&lt; Kembali
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          backgroundColor: "#fef8f0",
          p: 1,
          pt: 0,
          m: 1,
          mt: 0,
        }}
      >
        {list}
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 1,
          m: 2,
        }}
      >
        example
      </Box>
    </div>
  );
}
