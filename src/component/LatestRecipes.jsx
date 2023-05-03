import React from "react";
import { Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const LatestRecipes = ({ recipe }) => {
  const { image_url, name, rating, chef } = recipe;
  return (
    <Card className="p-2">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <div className="d-flex align-items-center">
          <Card.Title className="flex-grow-1  fw-bold">{name} </Card.Title>
        </div>

        <div className="d-flex gap-2">
          <span className="fw-semibold">Rating:</span>{" "}
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <span>{rating}</span>
        </div>
        <p>
          <small>
            By Chef <span className="fw-bold">{chef}</span>
          </small>
        </p>
      </Card.Body>
    </Card>
  );
};

export default LatestRecipes;
