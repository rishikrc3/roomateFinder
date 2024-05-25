import React from "react";
import "./home2.css";
import homeImage from "../images/homepage.png";
import logo from "../images/logo.png";
import { imageListClasses } from "@mui/material";
import Footer from './Footer';
import Button from './Button'



const Home = () => {

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    // <section className="home-container">
    //   <div className="left-half" style={{ backgroundImage: `url(${logo})` }}> {/* Add this line */}
    //     <div className="writeup1">
    //       <h1>Hey! You are at the right place</h1>
    //     </div>
    //     <div className="writeup2">
    //       <h3>
    //         Talk with different people while exploring the app and enjoy
    //         choosing your 
    //         <span> Roomamte!</span>
    //       </h3>
    //     <div className="bottom">
    //       <button className="button"><span> Getting Started</span></button>
    //     </div>
    //     </div>
    //   </div>
    //   <div className="right-half">{<img src={homeImage} alt="Login" />}</div>
    // </section>
    <div className="home-container-wrapper">
      <section className="home-container">
        <div className="left-half-wrapper">
          <p className="p1">Hey! You are at the right place</p>
          <p className="p2">Talk with different people while exploring the app and enjoy choosing your Roommate</p>
          {/* <div className="bottom">
          <button className="button"><span> Getting Started</span></button>
          </div> */}

          <Button onClick={handleClick}>Get Started</Button>


        </div>
        <div className="right-half-wrapper">{<img src={homeImage} alt="homepageImage" />}</div>
      </section>
      <div className="details">

      </div>
      <Footer />
    </div>


  );
};

export default Home;