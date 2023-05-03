import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container ">
      <div className="text-center">
        <img
          src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg&ga=GA1.1.1346969389.1672858153&semt=robertav1_2_sidr"
          alt="404 error image"
          className="img-fluid w-50 "
        />
        <h1 className="display-7 mb-0 ">Oops! Page not found.</h1>
        <p className="lead">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>

        <Button className="bg-danger">
          <Link className="text-white fw-semibold text-decoration-none" to="/">
            Back to Home Page
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
