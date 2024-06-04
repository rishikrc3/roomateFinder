import React, { useState } from "react";
import "./search.css";
import "./Pages.css";

const Search = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedStream, setSelectedStream] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Selected Gender:", selectedGender);
    console.log("Selected Stream:", selectedStream);
    
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);
  };

  const handleStreamChange = (event) => {
    const value = event.target.value;
    setSelectedStream(value);
  };


  return (
    <div className="search-bar-container">
      <div className="search">
        <div className="select-wrapper">
          <select
            className="gender-select"
            value={selectedGender}
            onChange={handleGenderChange}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="select-wrapper">
          <select
            className="stream-select"
            value={selectedStream}
            onChange={handleStreamChange}
          >
            <option value="">All Streams</option>
            <option value="AEIE">AEIE</option>
            <option value="BME">BME</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="EE">EE</option>
            <option value="CE">CE</option>
            <option value="CSBS">CSBS</option>
            <option value="ME">ME</option>
            <option value="CSE(AIML)">CSE(AIML)</option>
          </select>
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
