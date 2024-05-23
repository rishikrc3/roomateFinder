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
        title="Card 1"
        description="This is a description of card 1"
        onClick={handleClick}
      />
      <Card
        image={NeedRoommate}
        title="Card 2"
        description="This is a description of card 2"
        onClick={handleClick}
      />
    </div>
  );
};
export default App;