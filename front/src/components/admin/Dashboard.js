import React from "react";
import Nav from "./Nav";
import pasien from "./pasien.json";
import "./style.scss";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Link } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "nomor", label: "Nomor", minWidth: 10 },
  { id: "nama", label: "Nama", minWidth: 100 },
  { id: "alamat", label: "Alamat", minWidth: 170 },
  { id: "telp", label: "Telp", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
];

export default function Dashboard() {
  const [value, setValue] = React.useState(null);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [buka, setBuka] = React.useState(false);

  const handleBuka = () => {
    setBuka(true);
  };
  const handleTutup = () => {
    setBuka(false);
  };

  const ButtonBuka = styled(Button)(() => ({
    backgroundColor: "#5138EC",
    float: "right",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: "#2f14d5",
    },
  }));

  const ButtonTambah = styled(Button)(() => ({
    backgroundColor: "#35A38F",
    float: "right",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: "#2f907e",
    },
  }));

  const ButtonTutup = styled(Button)(() => ({
    backgroundColor: "#FF4E4E",
    float: "right",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: "#ff3535",
    },
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="dashboard">
      <Nav />
      <div style={{ height: "5rem" }}></div>
      <Box
        sx={{
          backgroundColor: "white",
          border: "1px solid #828282",
          borderRadius: "2px",
          p: 2,
          m: 2,
        }}
      >
        <div className="title">
          <p>Daftar Pasien</p>
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            openTo="year"
            views={["year", "month", "day"]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        {buka ? (
          <>
            <ButtonTutup variant="contained" onClick={handleTutup}>
              Tutup
            </ButtonTutup>
            <ButtonTambah variant="contained">Tambah</ButtonTambah>
          </>
        ) : (
          <ButtonBuka variant="contained" onClick={handleBuka}>
            Buka
          </ButtonBuka>
        )}
      </Box>
      {buka ? (
        <Paper sx={{ width: "95%", overflow: "hidden", margin: "auto" }}>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {pasien
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={pasien.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
}
