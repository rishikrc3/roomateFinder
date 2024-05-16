import React, {useState} from 'react';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // Implement search functionality here
      };

      const [selectedGender, setSelectedGender] = useState("");

      const handleGenderChange = (event) => {
        const value = event.target.value;
        setSelectedGender(value);
      };

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search Stream..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>

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
            search
      </div>
  )
}

export default Search