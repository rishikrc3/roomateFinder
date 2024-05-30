// App.js

import React from "react";
import "./success.css";

function Success() {
  const handleClick = () => {
    window.location.href = "/basic";
    console.log("Card clicked!");
  };
  return (
    <div className="success-page">
      <div className="success-card">
        <h2>Your post is successful!</h2>
        <button onClick={handleClick}>Check Your Post</button>
      </div>
    </div>
  );
}

export default Success;
