import React from "react";
import DoctorImage from "../../img/online-doctor.png";
import "./login.scss";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="base-container">
      <div className="image col-0 col-md-2"></div>
      <div className="image col-0 col-md-4">
        <img src={DoctorImage} className="fixed-top" alt="" />
      </div>
      <div className="content col-12 col-md-4 ml-4 mr-4">
        <div className="header">
          <h2>Selamat Datang</h2>
          <h4>Sign in untuk mengakses Antri.in</h4>
        </div>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username atau email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan username atau email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan password" />
          </Form.Group>

          <Link to="#" style={{ color: "#F9B75D", float: "right" }}>
            Lupa password?
          </Link>
          <div className="clearfix"></div>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="custom-btn">
              Sign In
            </Button>
            <p className="text-center">
              Belum memiliki akun?{" "}
              <Link to="/register" style={{ color: "#F9B75D" }}>
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
      <div className="clearfix col-0 col-md-2"></div>
    </div>
  );
}
