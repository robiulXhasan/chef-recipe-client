import React, { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Chef from "../../component/Chef";
import { Container } from "react-bootstrap";
import LatestRecipes from "../../component/LatestRecipes";

const Home = () => {
  const allData = useLoaderData();

  const [latestRecipe, setLatestRecipe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recent-recipes")
      .then((res) => res.json())
      .then((data) => setLatestRecipe(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Container>
        <h2 className="mt-5 mb-4 ">- Best Chefs </h2>
        <div className="chef-section">
          {allData.map((data) => (
            <Chef key={data.id} data={data}></Chef>
          ))}
        </div>
        <h2 className="mt-5 mb-4 ">- Latest Recipes </h2>
        <div className="latest-recipe">
          
          {latestRecipe.map((recipe) => (
            <LatestRecipes key={recipe.id} recipe={recipe}></LatestRecipes>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
