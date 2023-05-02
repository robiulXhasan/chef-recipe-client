import React from "react";
import { Button } from "react-bootstrap";

const JoinUs = () => {
  return (
    <div className="mt-5 bg-white shadow p-3">
      <h5 className="fw-semibold text-warning">- JOIN US</h5>
      <div className="row mt-3 bg-white p-3  justify-content-between align-items-center">
        <div className="col-12 col-md-6">
          <h1>
            Let's start sharing <br /> your awesome <br /> recipes
          </h1>
          <Button variant="warning">Join Now</Button>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded"
            src="https://img.freepik.com/free-photo/medium-shot-people-indoors_23-2148893947.jpg?w=900&t=st=1683058797~exp=1683059397~hmac=71c78500c9077cfbaf899d48456e4309edf4f735bfff0dbf1353e88c4a70c025"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
