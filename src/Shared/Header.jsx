import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold fs-2" href="#home">
          Chef Sa<span className="text-warning">vv</span>y
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3 ">
            <Link className="text-dark text-decoration-none fs-5 fw-semibold" to="/">
              Home
            </Link>
            <Link className="text-dark text-decoration-none fs-5 fw-semibold" to="/blog">
              Blog
            </Link>
          </Nav>
          <Nav className=" gap-3 align-items-center">
            <Link href="#deets">Profile</Link>
            <Button variant="secondary">
              <Link className="text-white text-decoration-none fs-5 fw-semibold" to="/login">
                Login
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
