import React from "react";
import { Container } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";
const RecipeBanner = ({ data }) => {
  const { chef_name, chef_picture, number_of_recipes, total_likes, years_of_experience } = data;
  return (
    <div>
      <section
        style={{
          background: "#f5d7a6",
        }}
        className="banner  py-4"
      >
        <Container className="bg-light p-3 rounded-4 ">
          <div className="row align-items-center">
            <img className="col-12 col-md-6 rounded-4" src={chef_picture} alt="" />
            <div className="col-12 col-md-6 ">
              <div className="d-flex">
                <h2 className="flex-grow-1">Chef : {chef_name}</h2>
                <p className=" text-primary fs-4">
                  <FaRegThumbsUp /> <span className=" text-dark fw-semibold">{total_likes}</span>
                </p>
              </div>
              <p className="fs-4 ">
                Number of Recipes:{" "}
                <span className="text-warning fw-semibold">{number_of_recipes}</span>
              </p>
              <p className="fs-4 ">
                Experience : <span className="text-warning fw-semibold">{years_of_experience}</span>{" "}
                years{" "}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RecipeBanner;
