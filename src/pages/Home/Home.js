import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="hero-container container">
        <div className="hero-content">
          <h1>Hello</h1>
          <p>hello this is me</p>
          <button>Hello</button>
        </div>
        <div className="hero-image">
          <img
            src="/images/gallery/hero-img.svg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
