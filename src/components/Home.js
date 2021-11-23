import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Wel-come</h1>

      <div className="text-center pt-3">
        Produts information extracted from Amazon, Flipcart, and Snapdeal
        <sub> (Click on Products to view products)</sub>
      </div>

      <div className="tech-container d-flex justify-content-center">
        <div>
          <h5 className="font-weight-bold">Technologies</h5>
          <h6>
            <i className="fab fa-html5 "> HTML</i>
          </h6>
          <h6>
            <i className="fab fa-css3-alt "> CSS</i>
          </h6>
          <h6>
            <i className="fab fa-react"> React JS</i>

            <ul>
              <li>React Router Dom</li>
              <li>Axios</li>
              <li>React Hooks</li>
            </ul>
          </h6>
          <h6>
            <i className="fab fa-node">Node JS</i>

            <ul>
              <li>Cheerio Js</li>
              <li>Axios</li>
            </ul>
          </h6>
          <h6>
            <i className="fas fa-database">MongoDB</i>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
