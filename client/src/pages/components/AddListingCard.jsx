import React from "react";
import "./AddListingCard.css";

const Card = ({ image, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
export default Card;