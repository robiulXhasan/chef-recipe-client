import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner bg-light">
      <Container className="bg-light p-3  ">
        <div style={{ background: "#f5e9c6" }} className="row rounded-4  align-items-center p-4 mb-5">
          <div className="col-12 col-md-6 ">
            <h1 style={{ fontSize: "48px" }} className=" fw-semibold">
              Get Your Favorite <br /> Dishes Recipe from <br /> Best Chef
            </h1>
          </div>
          <img
            className="col-12 col-md-6 rounded-4"
            src="https://img.freepik.com/free-vector/food-artwork-with-chefs_1308-85384.jpg?w=826&t=st=1683053297~exp=1683053897~hmac=bfd58d5d46992c033e8afb79d4bb94049106f4bef8661b9085a6bc18f0e86614"
            alt=""
          />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
