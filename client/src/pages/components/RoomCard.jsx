import React from "react";
import './RoomCard.css'

const RoomCard = ({  messName, location, rent, lookingFor }) => {
  return (
    <div className="room-card">
      <p className="room-card-detail"><strong>Mess Name:</strong> {messName}</p>
      <p className="room-card-detail"><strong>Location:</strong> {location}</p>
      <p className="room-card-detail"><strong>Rent:</strong> {rent}</p>
      <p className="room-card-detail"><strong>Looking For:</strong> {lookingFor}</p>
      <p className="room-card-detail"><strong>Looking For:</strong> Roommate </p>
    </div>
  );
};

export default RoomCard;
