import React from "react";
import "./App.scss";
import Login from "./components/account/login";
import Register from "./components/account/register";
import Beranda from "./components/front/Beranda";
import Antrian from "./components/front/Antrian";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/antrian">
            <Antrian />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
