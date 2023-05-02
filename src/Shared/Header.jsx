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
          <Nav className="ms-auto  gap-3 align-items-md-center ">
            <Link className="text-dark text-decoration-none fs-5 fw-semibold" to="/">
              Home
            </Link>
            <Link
              className="text-dark text-decoration-none fs-5 fw-semibold me-0 me-md-5"
              to="/blog"
            >
              Blogs
            </Link>

            <Link className="ms-0 ms-md-5" href="#deets">
              Profile
            </Link>
            <Button variant="warning">
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
