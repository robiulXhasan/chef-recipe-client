import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ActiveLink from "../component/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/" className="fw-bold fs-2 text-decoration-none text-dark">
          Chef Sa<span className="text-warning">vv</span>y
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  gap-3 align-items-md-center ">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blogs</ActiveLink>

            {user ? (
              <div className=" d-md-flex gap-md-4">
                <div className="ms-0 ms-md-5  mb-4 mb-md-0">
                  <img
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title={user?.displayName}
                    style={{ height: "50px" }}
                    className=" rounded-circle img-fluid"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>

                <Link
                  onClick={handleLogOut}
                  className="text-black py-2 px-3  bg-warning rounded text-decoration-none fs-5 fw-semibold"
                  to="/login"
                >
                  Log Out
                </Link>
              </div>
            ) : (
              <Link
                className="text-black py-2 px-3 bg-warning rounded text-decoration-none fs-5 fw-semibold"
                to="/login"
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
