import React from "react";
import "./App.scss";
import Login from "./components/account/login";
import LoginAdmin from "./components/account/LoginAdmin";
import Register from "./components/account/register";
import RegisAdmin from "./components/account/RegisAdmin";
import Laporan from "./components/admin/Laporan";
import Laporan2 from "./components/admin/Laporan2";
import MTable from "./components/admin/MTable";
import Beranda from "./components/front/Beranda";
import Antrian from "./components/front/Antrian";
import Dashboard from "./components/admin/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/regis-admin">
            <RegisAdmin />
          </Route>
          <Route path="/login-admin">
            <LoginAdmin />
          </Route>
          <Route path="/laporan">
            <Laporan />
          </Route>
          <Route path="/antrian">
            <Antrian />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/laporan2">
            <Laporan2 />
          </Route>
          <Route path="/dashboard2">
            <MTable />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
