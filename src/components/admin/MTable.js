import React from "react";
import Nav from "./Nav";
import "./style.scss";
import Axios from "axios";
import Paper from "@mui/material/Paper";
import MaterialTable from "material-table";
import Cookies from "js-cookie";

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

export default function MTable() {
  // const [data, setData] = React.useState([]);
  const [fixed, addFixed] = React.useState([]);
  const url = "/api/queues";
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": Cookies.get("token"),
  };

  React.useEffect(() => {
    Axios.get("/api/queues").then((res) => {
      // setData(res.data);
      addFixed(setFixed(res.data));
    });
  }, []);

  return (
    <div className="dashboard">
      <Nav />
      <div style={{ height: "5rem" }}></div>
      <Paper sx={{ width: "95%", overflow: "hidden", margin: "auto" }}>
        <MaterialTable
          title="Pasien"
          data={fixed}
          columns={column}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                newRow.status = Number(newRow.status);
                Axios.post(url, newRow, {
                  headers: headers,
                }).then((res) => {
                  Axios.get(url).then((result) => {
                    // setData(result.data);
                    addFixed(setFixed(result.data));
                  });
                });
                setTimeout(() => {
                  // setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                updatedRow.status = Number(updatedRow.status);
                Axios.put(
                  url + "/" + updatedRow._id,
                  { status: updatedRow.status },
                  {
                    headers: headers,
                  }
                ).then((res) => {
                  Axios.get(url).then((result) => {
                    addFixed(setFixed(result.data));
                  });
                });
                setTimeout(() => {
                  resolve();
                }, 2000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
        />
      </Paper>
    </div>
  );
}
