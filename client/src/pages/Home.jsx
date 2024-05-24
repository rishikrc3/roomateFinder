import React from "react";
import "./home.css";
import homeImage from "../images/home.jpg";
import logo from "../images/logo.png";
import { imageListClasses } from "@mui/material";

const Home = () => {
  return (
    <section className="home-container">
      <div className="left-half" style={{ backgroundImage: `url(${logo})` }}> {/* Add this line */}
        <div className="writeup1">
          <h1>Hey! You are at the right place</h1>
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
    // <section className="home-container">
    //   <div className="left-half">
    //     <p className="p1">Hey! You are at the right place</p>
    //     <p className="p2">Talk with different people while exploring the app and enjoy choosing your <span>Roommate</span></p>
    //     <button className="button"><span> Getting Started</span></button>
    //   </div>
    //   <div className="right-half">{<img src={homeImage} alt="homepageImage" />}</div>
      
    // </section>
  );
};

export default Home;