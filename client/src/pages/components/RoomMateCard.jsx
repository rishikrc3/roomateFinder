import React from "react";
import './RoomCard.css'

const RoommateCard = ({ location, rent, lookingFor }) => {
  return (
    <div className="room-card">
      <p className="room-card-detail"><strong>Preferred Location:</strong> {location}</p>
      <p className="room-card-detail"><strong>Preferred Rent:</strong> ₹{rent}</p>
      <p className="room-card-detail"><strong>Looking For:</strong> {lookingFor}</p>
      <p className="room-card-detail"><strong>Looking For:</strong> Room </p>
    </div>
  );
};

export default RoommateCard;
