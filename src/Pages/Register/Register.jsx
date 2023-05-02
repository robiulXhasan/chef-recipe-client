import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <div className="mx-auto w-50 my-5 p-5 shadow bg-white">
        <h3 className="text-center fw-bold">Register your account</h3>
        <hr />
        <Form>
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
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="accept" label="Terms & Conditions" required />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100 p-2 fs-5">
            Register
          </Button>
        </Form>
        <p className="text-center mt-2">
          <small>Already Have An Account ? </small>{" "}
          <Link to="/login" className="text-decoration-none text-warning fw-bold">
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
