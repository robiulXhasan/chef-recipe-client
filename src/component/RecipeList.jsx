import React from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const RecipeList = ({ recipe }) => {
  const { recipe_image, recipe_name, rating, ingredients, cooking_method } = recipe;
  console.log(recipe);
  return (
    <Card className="p-2">
      <Card.Img variant="top" src={recipe_image} />
      <Card.Body>
        <div className="d-flex align-items-center">
          <Card.Title className="flex-grow-1  fw-bold">Recipe Name: {recipe_name} </Card.Title>
        </div>
        <div className="mb-0">
          <p className="fw-semibold mb-0">Ingredients:</p>

          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="fw-semibold mb-0">Cooking Method:</p>
          <ol className="">
            {cooking_method.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ol>
        </div>
        <div className="d-flex gap-2">
          <span className="fw-semibold">Rating:</span>{" "}
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <span>{rating}</span>
        </div>
      </Card.Body>

      <Button className="p-2 fw-semibold" variant="warning">
        Add to Favorite
      </Button>
    </Card>
  );
};

export default RecipeList;
