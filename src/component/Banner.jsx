import React from "react";
import banner from "../../public/banner.jpg";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <section style={{
        background:"#f5d7a6"
    }
    } className="banner  py-4">
      <Container className="bg-light p-3 rounded-4 ">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 ">
            <h1 className="fs-1 fw-semibold">
              Get Your Favorite <br /> Dishes Recipe from <br /> Best Chef
            </h1>
          </div>
          <img className="col-12 col-md-6 rounded-4" src={banner} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
