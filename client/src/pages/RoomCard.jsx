import React from "react";
import "./Pages.css";

const RoomCard = ({ fullName, messName, location, rent, lookingFor }) => {
  return (
    <div className="room-card">
      <h1>Full name: {fullName}</h1>
      <h1>Mess name: {messName}</h1>
      <h1>Location: {location}</h1>
      <h1>Rent: {rent}</h1>
      <h1>Looking for: {lookingFor}</h1>
    </div>
  );
};

export default RoomCard;