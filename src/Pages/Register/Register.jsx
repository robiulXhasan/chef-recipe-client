import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "../Login/Login.css";

const Register = () => {
  const { createUser, profileUpdate, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    if (password < 6) {
      setError("Password Can not be less than 6 character long");
      return;
    }

    createUser(email, password)
      .then((result) => {
        profileUpdate(name, photoURL)
          .then(() => {
            toast("Successfully Registered!!");
            logOut()
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                console.log(error.message);
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <Container>
      <div className="mx-auto form-width my-5 p-5 shadow bg-white">
        <h3 className="text-center fw-bold">Register your account</h3>
        <hr className="text-warning" />
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your photo URL"
              name="photo"
              className="bg-light p-3"
              required
            />
          </Form.Group>
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
              type="password"
              placeholder="Enter your password"
              name="password"
              className="bg-light p-3"
              required
            />
          </Form.Group>
          <Button variant="warning" type="submit" className="w-100 p-2 fs-5">
            Register
          </Button>
        </Form>

        <p className="text-center mt-2">
          <small>Already Have An Account ? </small>{" "}
          <Link to="/login" className="text-decoration-none text-warning fw-bold">
            Login
          </Link>
        </p>
        <p>
          <small className="text-danger">{error}</small>
        </p>
      </div>
    </Container>
  );
};

export default Register;
