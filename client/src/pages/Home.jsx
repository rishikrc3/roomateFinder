import React from "react";
import "./home.css";
import homeImage from "../images/home.jpg";
import logo from "../images/logo.png" // Import the logo image

import logo from "../images/logo.png"; 

const Home = () => {
    return (
        <section className="container">
            {/* <div className="logo">
            </div> */}
            <div className="left-half">
                <img src={logo} alt="Logo" /> {/* Render the logo image */}
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
    );
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
  );
};

export default Home;