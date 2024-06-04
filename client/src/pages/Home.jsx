import React from "react";
import "./home2.css";
import homeImage from "../images/homeImage1.jpg";
import homeCreateAccount from "../images/homeCreateAccount.png";
import homeSetPreference from "../images/homeSetPreference.png";
import homeViewPost from "../images/homeViewPost.png";
import homeMakePost from "../images/homeMakePost.png";
import homeConnect from "../images/homeConnect.png";
import logo from "../images/logo.png";
import { imageListClasses } from "@mui/material";
import Footer from "./Footer";
import Button from "./Button";

const Home = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    window.location.href = "/register";
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
    <div className="home-container">
      <section>
        <div className="left-half-wrapper">
          <p className="p1">Hey! What's Up NSECians!</p>
          <p className="p2">
            Find Your Compatible Roommate from Your Collge Commuinty
          </p>

          <Button onClick={handleClick}>Get Started</Button>
        </div>
        <div className="right-half-wrapper">
          {<img src={homeImage} alt="homepageImage" />}
        </div>
      </section>

      <section>
        <div className="left">
          <h1>Create Account</h1>
          <p>Create Your Own Account with basic informations!</p>
        </div>
        <div className="right">
          {<img src={homeCreateAccount} alt="create account" />}
        </div>
      </section>

      <section>
        <div className="left">
          <h1>Set Preferences</h1>
          <p>Let The Others Know What You Like!</p>
        </div>
        <div className="right">
          {<img src={homeSetPreference} alt="set preference" />}
        </div>
      </section>

      <section>
        <div className="left">
          <h1>Search Roommate</h1>
          <p>
            View Room/Roommate Requirement Posts Of Other Students From Our
            College!
          </p>
        </div>
        <div className="right">{<img src={homeViewPost} alt="posts" />}</div>
      </section>

      <section>
        <div className="left">
          <h1>Make Post</h1>
          <p>Make Your Own Post According to Your Requirements!</p>
        </div>
        <div className="right">
          {<img src={homeMakePost} alt="make post" />}
        </div>
      </section>

      <section>
        <div className="left">
          <h1>Let's Connect!</h1>
          <p>Connect with your compatible roommate via contact detalis</p>
        </div>
        <div className="right">{<img src={homeConnect} alt="connect" />}</div>
      </section>
    </div>
  );
};

export default Home;
