import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ data }) => {
  console.log(data);
  const { id, chef_name, chef_picture, number_of_recipes, total_likes, years_of_experience } = data;
  return (
    <Card className="p-2 bg-light">
      <Card.Img variant="top" src={chef_picture} />
      <Card.Body>
        <div className="d-flex align-items-center">
          <Card.Title className="flex-grow-1  fw-bold">Chef: {chef_name} </Card.Title>
          <p className=" text-primary">
            <FaRegThumbsUp /> <span className=" text-dark fw-semibold">{total_likes}</span>
          </p>
        </div>
        <Card.Text className="mb-0">
          Experience: <span className="text-warning fw-semibold">{years_of_experience}</span> years
        </Card.Text>
        <Card.Text>
          Number of Recipes: <span className="text-warning fw-semibold">{number_of_recipes}</span>
        </Card.Text>
      </Card.Body>
      <Button className="p-2 fw-semibold" variant="warning">
        <Link to={`/recipe/${id}`}>View Recipes</Link>
      </Button>
    </Card>
  );
};

export default Chef;
