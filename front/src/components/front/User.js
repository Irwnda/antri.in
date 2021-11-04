import React from "react";
import Nav from "./nav";
import "./style.scss";
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

export default function First() {
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
    <div className="user">
      <Nav />
      <Box sx={{ flexGrow: 1, marginTop: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={7}>
            Ini gambar
          </Grid>
          <Grid item xs={12} md={5}>
            <Card className="kartu-nomor">
              <CardContent
                sx={
                  diambil
                    ? { backgroundColor: "#FFACAC" }
                    : { backgroundColor: "#EDEFFE" }
                }
              >
                <div className="nomor">56</div>
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
                <div className="nomor">36</div>
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
                <div className="nomor">1 Jam 45 menit</div>
                <div className="info">Estimasi Waktu Dipanggil</div>
              </CardContent>
            </Card>

            <Card className="tombol">
              <CardContent
                sx={{
                  backgroundColor: "#B2ACD7",
                }}
              >
                <div className="action">Lihat Antrian</div>
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
