import React from "react";
import Banner from "../../component/Banner";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Chef from "../../component/Chef";
import { Container } from "react-bootstrap";

const Home = () => {
  const allData = useLoaderData();
  console.log(allData.length);
  return (
    <div>
      <Banner></Banner>
      <Container>
        <h2 className="mt-5 mb-4 ">- Best Chef </h2>
        <div className="chef-section">
          {allData.map((data) => (
            <Chef key={data.id} data={data}></Chef>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
