import React from "react";
import Card from "./components/AddListingCard";
import NeedRoom from "../images/NeedRoom.png";
import NeedRoommate from "../images/NeedRoommate.jpg";

const App = () => {
  const handleClick = () => {
    console.log("Card clicked!");
  };

  return (
    <div className="addlist_container">
        <div className="title">
            <h1>Post Your Requirements</h1>
        </div>
      <div>
        <Card
          image={NeedRoom}
          title="Need Room"
          description="with roomamte"
          onClick={handleClick}
        />
        <Card
          image={NeedRoommate}
          title="Need Roomamte"
          description="for my Room"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
export default App;
