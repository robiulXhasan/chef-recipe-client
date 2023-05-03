import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { LoginUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    setError("");
    LoginUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("successfully logged in");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const managePassword = (event) => {
    if (event.target.checked) {
      setShow(!show);
    } else {
      setShow(false);
    }
  };
  return (
    <Container>
      <div className="mx-auto w-50 my-5 p-5 shadow bg-white">
        <h3 className="text-center fw-bold">Login your account</h3>
        <hr />
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="bg-light p-3"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check onClick={managePassword} type="checkbox" label="Show Password" />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100 p-2 fs-5">
            Login
          </Button>
        </Form>
        <p className="text-center mt-2">
          <small>Don’t Have An Account ? </small>{" "}
          <Link to="/register" className="text-decoration-none text-warning fw-bold">
            Register
          </Link>
        </p>
        <p>
          <small className="text-danger">{error}</small>
        </p>
        <h4 className="text-center">- OR -</h4>
        <div className="d-flex  justify-content-between ">
          <Button variant="dark" type="submit" className=" p-2 fs-5  ">
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="dark" type="submit" className=" p-2 fs-5">
            <FaGithub /> Login with Github
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
