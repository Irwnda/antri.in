import React, { useEffect } from "react";
import Nav from "./nav";
import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import Pana from "../../img/pana.png";
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
import Cookies from "js-cookie";
import Axios from "axios";

const style = {
  position: "absolute !important",
  top: "50% !important",
  left: "50% !important",
  transform: "translate(-50%, -50%) !important",
  width: 400,
  bgcolor: "#EDEFFE !important",
  border: "2px solid #132F3A !important",
  boxShadow: 24,
  p: 2,
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function minToTime(minutes) {
  let hour = Math.floor(minutes / 60);
  let min = minutes % 60;

  if (min < 10) min = "0" + min;
  if (hour === 0) return min + " menit";
  return hour + " jam " + min + " menit";
}

function currentUser() {
  if (Cookies.get("token") === undefined) return 0;
  return parseJwt(Cookies.get("token")).user.id;
}

export default function Beranda() {
  const url = "/api/queues";
  const history = useHistory();

  const [diambil, setDiambil] = React.useState(false);
  const [nomorTerakhir, setLastNum] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [diperiksa, setDiperiksa] = React.useState(0);

  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": Cookies.get("token"),
  };

  useEffect(() => {
    if (Cookies.get("token") === undefined) {
      history.push("/login");
    }
  });

  useEffect(() => {
    Axios.get(url).then((res) => {
      let flag = 1;
      console.log("ini loh", res);
      for (let i = 0; i < res.data.length; i++) {
        if (flag) {
          if (res.data[i].status === 1) flag = 0;
          else setDiperiksa(i + 1);
        }
        if (res.data[i].user === currentUser()) {
          setDiambil(true);
          Cookies.set("_id", res.data[i]._id, { expires: 1 });
          Cookies.set("urutan", res.data[i].num, { expires: 1 });
        }
      }
      setLastNum(res.data.at(-1).num);
    });
    // console.log(Cookies.get("_id"));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAntrian = () => {
    console.log("curr ", currentUser(), Cookies.get("_id"));
    if (diambil) {
      Axios.delete(url + "/" + Cookies.get("_id"), {
        headers: headers,
      })
        .then((res) => {
          Cookies.remove("_id");
          Cookies.remove("urutan");
          Axios.get("/api/queues/").then((res) => {
            setLastNum(res.data.at(-1).num);
          });
          setDiambil(!diambil);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      Axios.post(
        url,
        {},
        {
          headers: headers,
        }
      )
        .then((res) => {
          Cookies.set("_id", res.data._id, { expires: 1 });
          Cookies.set("urutan", res.data.num, { expires: 1 });
          setDiambil(!diambil);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }
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
            <img src={Pana} alt="" />
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
                  {diambil ? Cookies.get("urutan") : nomorTerakhir}
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
                <div className="nomor">{diperiksa}</div>
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
                <div className="nomor">
                  {minToTime((nomorTerakhir - diperiksa) * 10)}
                </div>
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
