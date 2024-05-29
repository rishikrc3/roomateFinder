import React from "react";
import Card from "./components/AddListingCard";
import NeedRoom from "../images/NeedRoom.png";
import NeedRoommate from "../images/NeedRoommate.jpg";
import "./AddListing.css";

const App = () => {
  const handleClick1 = () => {
    window.location.href = "/needRoom";
    console.log("Card clicked!");
  };
  const handleClick2 = () => {
    window.location.href = "/needRoommate";
    console.log("Card clicked!");
  };

  return (
    <div className="addlist_container">
      <div className="card-container">
        <div className="title">
          <h1>Post Your Requirements</h1>
        </div>
        <div className="card-section">
          <Card
            image={NeedRoom}
            title="Need Room"
            description="with roommate"
            onClick={handleClick1}
          />
          <Card
            image={NeedRoommate}
            title="Need Roommate"
            description="for your Room"
            onClick={handleClick2}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
