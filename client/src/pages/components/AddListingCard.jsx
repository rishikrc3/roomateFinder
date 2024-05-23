import React from "react";
import "./card.css";

const Card = ({ image, title, description, onClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className="card-button" onClick={onClick}>
        Learn More
      </button>
    </div>
  );
};

export default Card;