import React from "react";
import { useLoaderData } from "react-router-dom";
import RecipeBanner from "../../component/RecipeBanner";
import RecipeList from "../../component/RecipeList";
import { Container } from "react-bootstrap";
import "./Recipe.css";

const Recipe = () => {
  const data = useLoaderData();
  return (
    <div>
      <RecipeBanner key={data.id} data={data}></RecipeBanner>
      <Container>
        <h2 className="mt-5 fw-bold ">Recipes</h2>
        <div className="recipe-card">
          {data.recipes.map((recipe, index) => (
            <RecipeList recipe={recipe} key={index}></RecipeList>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Recipe;
