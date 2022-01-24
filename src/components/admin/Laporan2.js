import React from "react";
import Nav from "./Nav";
import "./style.scss";
import Axios from "axios";
import Paper from "@mui/material/Paper";
import MaterialTable from "material-table";

const column = [
  { field: "num", title: "Nomor", editable: false },
  { field: "name", title: "Nama" },
  { field: "address", title: "Alamat" },
  { field: "phone", title: "Telp" },
  {
    field: "status",
    title: "Status",
    lookup: {
      1: "Antri",
      2: "Batal",
      3: "Belum Hadir",
      4: "Sedang Diperiksa",
      5: "Sudah Diperiksa",
    },
  },
];

function setFixed(data) {
  let res = data;
  res.forEach((element) => {
    if (element.status === 5) {
      element.stat = "5";
    } else if (element.status === 2) {
      element.stat = "2";
    } else if (element.status === 3) {
      element.stat = "3";
    } else if (element.status === 4) {
      element.stat = "4";
    } else if (element.status === 1) {
      element.stat = "1";
    }
  });
  return res;
}

export default function Laporan2() {
  // const [data, setData] = React.useState([]);
  const [fixed, addFixed] = React.useState([]);

  React.useEffect(() => {
    Axios.get("/api/queues").then((res) => {
      // setData(res.data);
      addFixed(setFixed(res.data));
    });
  }, []);

  return (
    <div className="dashboard mi">
      <Nav />
      <div style={{ height: "5rem" }}></div>
      <Paper sx={{ width: "95%", overflow: "hidden", margin: "auto" }}>
        <MaterialTable title="Laporan Pasien" data={fixed} columns={column} />
      </Paper>
    </div>
  );
}
