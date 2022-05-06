import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const navBar = (props) => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"> Le site des Ardennes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Link>
          <Link to="/localisation">
            <Nav.Link href="/localisation">Localisation</Nav.Link>
          </Link>
          <Link to="/contact">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default navBar;
