import React, { useEffect, useState } from "react";
import RoomCard from "./components/RoomCard";
import RoomMateCard from "./components/RoomMateCard";
import Search from "./Search";
import "./Pages.css";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [roommates, setRoommates] = useState([]);
  const [displayType, setDisplayType] = useState("rooms"); // default display type is 'rooms'

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
      setRoommates(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchRoom(); // fetch rooms data on component mount
  }, []);

  const handleRoomButtonClick = () => {
    setDisplayType("rooms");
  };
  const handleRoommateButtonClick = () => {
    fetchRoomMate(); // fetch roommates data when button is clicked
    setDisplayType("roommates");
  };

  return (
    <div className="basicPage-container">
      <div className="top-bar">
        <div className="bar-left">
          <button
            className={
              "fetch-button margin-right " +
              (displayType === "rooms" ? "active" : "inactive")
            }
            onClick={handleRoomButtonClick}
          >
            Rooms
          </button>
          <button
            className={
              "fetch-button " +
              (displayType === "roommates" ? "active" : "inactive")
            }
            onClick={handleRoommateButtonClick}
          >
            Roomamtes
          </button>
        </div>
        <Search className="search-bar" />
      </div>
      <section className="search-page">
        <div className="results">
          {displayType === "rooms" &&
            rooms.map((room, index) => (
              <Link to={"/rooms/" + room._id} className="custom-link">
                <RoomCard key={room._id} {...room} />
              </Link>
            ))}
          {displayType === "roommates" &&
            roommates.map((roommate, index) => (
              <Link to={"/roommates/" + roommate._id} className="custom-link">
                <RoomMateCard key={roommate._id} {...roommate} />
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
