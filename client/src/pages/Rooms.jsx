import React, { useEffect, useState } from "react";
import RoomCard from "./components/RoomCard";
import Search from "./Search";
import "./Pages.css";
import './components/RoomCard.css';
//import './Rooms.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/rooms");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Response:", data);
      setRooms(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <>
      <div className="top-bar">
        <button className="fetch-button" onClick={handleButtonClick}>Fetch Rooms</button>
        <Search className="search-bar" />
      </div>
      <section className="search-page">
        <div className="container">
          <div className="results">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
