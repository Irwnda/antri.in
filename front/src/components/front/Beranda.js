import React from "react";
import Nav from "./nav";
import "./style.scss";
import antrian from "./antrian.json";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#EDEFFE",
  border: "2px solid #132F3A",
  boxShadow: 24,
  p: 2,
};

function minToTime(minutes) {
  let hour = Math.floor(minutes / 60);
  let min = minutes % 60;

  if (min < 10) min = "0" + min;
  if (hour === 0) return min + " menit";
  return hour + " jam " + min + " menit";
}

export default function Beranda() {
  const [diambil, setDiambil] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAntrian = () => {
    setDiambil(!diambil);
    handleClose();
  };

  const NoButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#868E96",
    width: "40%",
    margin: "5%",
    "&:hover": {
      backgroundColor: "#757D95",
    },
  }));

  return (
    <div className="beranda">
      <Nav />
      <div style={{ height: "5rem" }}></div>
      <Box sx={{ flexGrow: 1, marginTop: "1rem" }}>
        <Grid container spacing={2}>
          <Box
            component={Grid}
            item
            md={7}
            display={{ xs: "none", md: "block" }}
            className="image"
          >
            Ini gambar
          </Box>
          <Grid item xs={12} md={5}>
            <Card className="kartu-nomor">
              <CardContent
                sx={
                  diambil
                    ? { backgroundColor: "#FFACAC" }
                    : { backgroundColor: "#EDEFFE" }
                }
              >
                <div className="nomor">
                  {diambil ? antrian.nomorUser : antrian.nomorTerakhir}
                </div>
                <div className="info">
                  {diambil ? "Nomor Anda" : "Nomor Terakhir"}
                </div>
              </CardContent>
            </Card>
            <Card className="kartu-nomor">
              <CardContent
                sx={{
                  backgroundColor: "#82DFF3",
                }}
              >
                <div className="nomor">{antrian.nomorDiperiksa}</div>
                <div className="info">Nomor Diperiksa</div>
              </CardContent>
            </Card>

            <div className="clearfix"></div>

            <Card className="estimasi">
              <CardContent
                sx={{
                  backgroundColor: "#E0E2B1",
                }}
              >
                <div className="nomor">{minToTime(antrian.EstimasiWaktu)}</div>
                <div className="info">Estimasi Waktu Dipanggil</div>
              </CardContent>
            </Card>

            <Card className="tombol">
              <CardContent
                sx={{
                  backgroundColor: "#B2ACD7",
                }}
              >
                <Link to="./antrian" style={{ textDecoration: "none" }}>
                  <div className="action">Lihat Antrian</div>
                </Link>
              </CardContent>
            </Card>

            <Card className="tombol">
              <CardContent
                sx={
                  diambil
                    ? { backgroundColor: "#FF4E4E" }
                    : { backgroundColor: "#5138EC" }
                }
              >
                <div className="action" onClick={handleOpen}>
                  {diambil ? "Batalkan Antrian" : "Ambil Nomor Antrian"}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ borderBottom: "1px solid #132f3a" }}
          >
            {diambil ? "Batalkan" : "Ambil"}
            {" Antrian"}
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "1.5rem", textAlign: "center" }}>
            Apakah Anda yakin untuk {diambil ? "membatalkan" : "mengambil"}{" "}
            antrian ?
          </Typography>

          <div>
            <NoButton variant="contained" size="medium" onClick={handleClose}>
              Tidak
            </NoButton>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              onClick={handleAntrian}
              sx={{ width: "40%", margin: "5%" }}
            >
              {diambil ? "Batalkan" : "Ambil"}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
