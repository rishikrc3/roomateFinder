import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RoomPage.css"; // Import the CSS file

const RoomPage = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/rooms/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setRoomData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="header">Room Page</h1>
      {roomData && (
        <div className="roomDetails">
          <div className="leftColumn">
            <h3 className="sectionTitle">Created By</h3>
            <p><strong>Name:</strong> {roomData.createdBy.name}</p>
            <p><strong>Email:</strong> {roomData.createdBy.email}</p>
            <p><strong>Gender:</strong> {roomData.createdBy.gender}</p>
            <p><strong>Contact No:</strong> {roomData.contactNo}</p>
          </div>
          <div className="rightColumn">
            <h2>Location: {roomData.location}</h2>
            <p><strong>Looking For:</strong> {roomData.lookingFor}</p>
            <p><strong>Mess Name:</strong> {roomData.messName}</p>
            <p><strong>Occupancy:</strong> {roomData.occupancy}</p>
            <p><strong>Rent:</strong> ₹{roomData.rent}</p>

            <div className="detailsColumns">
              <div className="detailsColumn">
                <h3 className="sectionTitle">Amenities</h3>
                <ul className="detailsList">
                  {Object.entries(roomData.amenities).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value ? "Yes" : "No"}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detailsColumn">
                <h3 className="sectionTitle">Highlights</h3>
                <ul className="detailsList">
                  {Object.entries(roomData.highlights).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value ? "Yes" : "No"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
