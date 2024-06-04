import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RoomPage.css"; // Import the CSS file

const RoommatePage = () => {
  const { id } = useParams();
  const [roommateData, setRoommateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoommateData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/requirements/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setRoommateData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRoommateData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="header">Post Details</h1>
      {roommateData && (
        <div className="roomDetails">
          <div className="leftColumn">
            <h3 className="sectionTitle">Post Created By</h3>
            <p><strong>Name:</strong> {roommateData.userId.name}</p>
            <p><strong>Email:</strong> {roommateData.userId.email}</p>
            <p>
              <strong>Where From:</strong> {roommateData.userId.from}
            </p>
            <p><strong>Gender:</strong> {roommateData.userId.gender}</p>
            <p><strong>Contact No:</strong> {roommateData.contactNo}</p>
            <p>
              <strong>Stream:</strong> {roommateData.userId.stream}
            </p>
            <p>
              <strong>Year of Passing:</strong>{" "}
              {roommateData.userId.yearOfPassing}
            </p>
            <ul>
              {Object.keys(roommateData.userId.preferences)
                .filter((key) => roommateData.userId.preferences[key])
                .map((key) => (
                  <li key={key}>
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </strong>
                  </li>
                ))}
            </ul>
            
          </div>
          <div className="rightColumn">
            <h2>Location: {roommateData.location}</h2>
            <p><strong>Looking For:</strong> {roommateData.lookingFor}</p>
            <p><strong>Rent:</strong> ₹{roommateData.rent}</p>
            <p><strong>Preferred Stream:</strong> {roommateData.preferenceStream}</p>

            <div className="detailsColumns">

              <div className="detailsColumn">
                <h3 className="sectionTitle">Description</h3>
                <p>{roommateData.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoommatePage;
