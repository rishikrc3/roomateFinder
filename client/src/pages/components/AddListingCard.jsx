import React from "react";
import "./AddListingCard.css";

const Card = ({ image, title, description, onClick }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h1>{title}</h1>
      </div>
      <div className="description">
        <h2>{description}</h2>
      </div>
      <button className="card-button" onClick={onClick}>
        Add Post
      </button>
    </div>
  );
};

export default Card;