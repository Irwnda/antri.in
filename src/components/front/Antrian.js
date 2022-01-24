import React from "react";
import listAntrian from "./listAntrian.json";
import listAntrian2 from "./listAntrian2.json";
import listAntrian3 from "./listAntrian3.json";
import Nav from "./nav";
import "./style.scss";
import { Box, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import Axios from "axios";

export default function Antrian() {
  const antrianList = [listAntrian, listAntrian2, listAntrian3];
  const [halaman, setHalaman] = React.useState(1);
  const [activePage, setActive] = React.useState(antrianList[halaman - 1]);
  const [daftarAntrian, setAntrian] = React.useState([]);
  const [totalAntrian, setTotalAntrian] = React.useState(0);

  const handleLeft = () => {
    if (halaman > 1) setHalaman(halaman - 1);
    setActive(antrianList[halaman - 1]);
  };
  const handleRight = () => {
    if (halaman < Math.ceil(totalAntrian / 24)) setHalaman(halaman + 1);
    setActive(antrianList[halaman - 1]);
  };

  React.useEffect(() => {
    Axios.get("/api/queues/").then((res) => {
      setTotalAntrian(res.data.length);
      if (res.data.length > 0) {
        setAntrian(res.data);
      }
    });
  }, []);

  const list = [];
  const list2 = [];
  for (let i = 0; i < daftarAntrian.length; i++) {
    let antrian = daftarAntrian[i];
    let bgColor, keterangan;
    if (antrian.status === 5) {
      bgColor = "#F4F1B1";
      keterangan = "Sudah diperiksa";
    } else if (antrian.status === 2) {
      bgColor = "#FF8541";
      keterangan = "Batal";
    } else if (antrian.status === 3) {
      bgColor = "#BD9EAD";
      keterangan = "Belum Hadir";
    } else if (antrian.status === 4) {
      bgColor = "#85D1F1";
      keterangan = "Sedang Diperiksa";
    } else {
      bgColor = "#FFD7F6";
      keterangan = "Antri";
    }

    list2.push(
      <Card className="detailAntrian" key={antrian.num}>
        <CardContent sx={{ backgroundColor: bgColor }} className="container">
          <div className="nomor">{antrian.num}</div>
          <div className="info">{keterangan}</div>
        </CardContent>
      </Card>
    );
  }

  activePage.data.forEach((antrian) => {
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
      <div className="filler"></div>
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
        {list2}
      </Box>
      <div style={{ height: "3rem" }}></div>
      <Box
        sx={{
          backgroundColor: "#fff",
          border: "1px solid #828282",
          borderRadius: "2px",
          p: 1,
          m: 2,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {totalAntrian > 0 ? halaman * 24 - 24 + 1 : 0} -{" "}
        {halaman * 24 > totalAntrian ? totalAntrian : halaman * 24} of{" "}
        {totalAntrian} items
        <div className="right" onClick={handleRight}>
          <KeyboardArrowRight />
        </div>
        <div className="right" onClick={handleLeft}>
          <KeyboardArrowLeft />
        </div>
      </Box>
    </div>
  );
}
