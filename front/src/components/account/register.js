import React from "react";
import DoctorImage from "../../img/online-doctor.png";

import "./register.scss";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="base-container">
      <div className="image col-0 col-md-2"></div>
      <div className="image col-0 col-md-4">
        <img src={DoctorImage} className="fixed-top" alt="" />
      </div>
      <div className="content col-12 col-md-4 ml-4 mr-4">
        <div className="header">
          <h2>Sign Up</h2>
          <h4>Daftarkan untuk mengakses lebih lanjut</h4>
        </div>

        <Form>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Masukkan username" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Nomor Telepon</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nomor telepon" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Alamat</Form.Label>
            <Form.Control type="text" placeholder="Masukkan alamat" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Tanggal Lahir</Form.Label>
            <Form.Control type="date" placeholder="Masukkan tanggal lahir" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan password" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="custom-btn">
              Sign Up
            </Button>
            <p className="text-center">
              Sudah memiliki akun?{" "}
              <Link to="/login" style={{ color: "#F9B75D" }}>
                Sign In
              </Link>
            </p>
          </div>
        </Form>
      </div>
      <div className="clearfix col-0 col-md-2"></div>
    </div>
  );
}
