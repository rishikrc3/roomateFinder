import React from "react";
import './RoomCard.css'

const RoomCard = ({ fullName, messName, location, rent, lookingFor }) => {
  return (
    <div className="room-card">
      <h2 className="room-card-title"><strong></strong> {fullName}</h2>
      <p className="room-card-detail"><strong>Mess Name:</strong> {messName}</p>
      <p className="room-card-detail"><strong>Location:</strong> {location}</p>
      <p className="room-card-detail"><strong>Rent:</strong> {rent}</p>
      <p className="room-card-detail"><strong>Looking For:</strong> {lookingFor}</p>
    </div>
  );
};

export default RoomCard;
