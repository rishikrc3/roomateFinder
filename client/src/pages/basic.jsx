import React, { useEffect, useState } from "react";
import RoomCard from "./components/RoomCard";
import Search from "./Search";
import "./Pages.css";
import './components/RoomCard.css';
import { Link } from "react-router-dom";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRoom = async () => {
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
  const fetchRoomMate = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/requirements");
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

  const handleRoomButtonClick = () => {
    fetchRoom();
  };
  const handleRoommateButtonClick = () => {
    fetchRoomMate();
  };

  return (
    <div className="basicPage-container">
      <div className="top-bar">
        <div className="bar-left">
          <button className="fetch-button margin-right" onClick={handleRoomButtonClick}>
            Rooms
          </button>
          <button className="fetch-button" onClick={handleRoommateButtonClick}>
            Roomamtes
          </button>
        </div>
        <Search className="search-bar" />
      </div>
      <section className="search-page">
        {/* <div className="container"> */}
          <div className="results">
            {rooms.map((room, index) => (
              <Link to={"/rooms/" + room._id} className="custom-link">
                <RoomCard key={room._id} {...room} />
              </Link>
            ))}
          </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Rooms;