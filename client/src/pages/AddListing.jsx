import React from "react";
import Card from "./components/AddListingCard";
import NeedRoom from "../images/NeedRoom.png";
import NeedRoommate from "../images/NeedRoommate.jpg";

const App = () => {
  const handleClick = () => {
    console.log("Card clicked!");
  };

  return (
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
  );
};
export default App;