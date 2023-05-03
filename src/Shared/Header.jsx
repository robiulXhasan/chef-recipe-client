import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import ActiveLink from "../component/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = (event) => {
    event.preventDefault();
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="fw-bold fs-2" href="#home">
          <Link to="/" className="text-decoration-none text-dark">
            Chef Sa<span className="text-warning">vv</span>y
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  gap-3 align-items-md-center ">
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blog">Blogs</ActiveLink>

            {user ? (
              <>
                <div className="ms-0 ms-md-5" href="#deets">
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
                <Button onClick={handleLogOut} variant="warning">
                  <Link className="text-white text-decoration-none fs-5 fw-semibold" to="/login">
                    Log Out
                  </Link>
                </Button>
              </>
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
