
import React, { useState } from "react";
import RoomCard from "./RoomCard";
import Search from "./Search";
import "./Pages.css";

const Rooms = () => {
 

  const roomData = [
    {
      fullName: "John Doe",
      messName: "ABC Mess",
      location: "New York",
      rent: "$500",
      lookingFor: "Roommate",
    },
    {
      fullName: "Jane Smith",
      messName: "XYZ Mess",
      location: "Los Angeles",
      rent: "$600",
      lookingFor: "Roommate",
    },
    // Add more room data as needed
    {
      fullName: "Jane Smith",
      messName: "XYZ Mess",
      location: "Los Angeles",
      rent: "$600",
      lookingFor: "Roommate",
    },
    {
      fullName: "Jane Smith",
      messName: "XYZ Mess",
      location: "Los Angeles",
      rent: "$600",
      lookingFor: "Roommate",
    },
    {
      fullName: "Jane Smith",
      messName: "XYZ Mess",
      location: "Los Angeles",
      rent: "$600",
      lookingFor: "Roommate",
    },
    {
      fullName: "Jane Smith",
      messName: "XYZ Mess",
      location: "Los Angeles",
      rent: "$600",
      lookingFor: "Roommate",
    },
  ];

  const renderRoomCards = () => {
    return roomData.map((room, index) => <RoomCard key={index} {...room} />);
  };
 
  return (
    <>
    <Search/>
      <section className="search-page">
        <div className="container">
          <div className="results">{renderRoomCards()}</div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Rooms;

