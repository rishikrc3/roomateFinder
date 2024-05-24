import React, { useState } from "react";
import "./search.css";
import "./Pages.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Search Term:", searchTerm, "Selected Gender:", selectedGender);
  };

  const handleGenderChange = (event) => {
    const value = event.target.value;
    setSelectedGender(value);
  };

  return (
    <div className="search-bar-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search Stream like 'CSE'..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
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
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
