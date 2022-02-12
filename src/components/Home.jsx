import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="container">
      <h1>Rotunda Exercises</h1>
      <div>
        <h3>Choose one of the excersise</h3>
        <div>
          <div className="options">
            <Link to="parser">URL Parser</Link>
            <Link to="zoo">Zoo</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
