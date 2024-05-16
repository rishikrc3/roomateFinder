import React from "react";
import "./home.css";
import homeImage from "../images/home.jpg";
const Home = () => {
  return (
    <section className="container">
      <div className="left-half">
        <div className="writeup1">
          <h1>Hey! You are in the right place</h1>
        </div>
        <div className="writeup2">
          <h3>
            Talk with different people while exploring the app and enjoy
            choosing your 
            <span> Roomamte!</span>
          </h3>
        </div>
        <div className="bottom">
          <button className="button"><span> Getting Started</span></button>
        </div>
      </div>
      <div className="right-half">{<img src={homeImage} alt="Login" />}</div>
    </section>
  );
};

export default Home;
