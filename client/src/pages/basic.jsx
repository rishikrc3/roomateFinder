import React, { useEffect, useState } from "react";
import RoomCard from "./components/RoomCard";
import RoomMateCard from "./components/RoomMateCard"; // Import RoomMateCard component
import Search from "./Search";
import "./Pages.css";
import './components/RoomCard.css';
import { Link } from "react-router-dom";

const Rooms = () => {
  const [data, setData] = useState([]);
  const [isRoomData, setIsRoomData] = useState(true); // State to track whether room data or roommate data is being displayed

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Response:", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleRoomButtonClick = () => {
    fetchData("http://localhost:8000/api/rooms");
    setIsRoomData(true); // Set state to indicate room data is being displayed
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
            {data.map((item) => (
              <Link key={item._id} to={isRoomData ? "/rooms/" + item._id : "/roommates/" + item._id} className="custom-link">
                {isRoomData ? (
                  <RoomCard {...item} />
                ) : (
                  <RoomMateCard {...item} />
                )}
              </Link>
            ))}
          </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Rooms;
