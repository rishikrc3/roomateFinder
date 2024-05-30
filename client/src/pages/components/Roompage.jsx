import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./RoomPage.css"; // Import the CSS module

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Room Page</h1>
      {roomData && (
        <div className={styles.roomDetails}>
          <h2>Location: {roomData.location}</h2>
          <p>Looking For: {roomData.lookingFor}</p>
          <p>Mess Name: {roomData.messName}</p>
          <p>Occupancy: {roomData.occupancy}</p>
          <p>Rent: ${roomData.rent}</p>

          <h3 className={styles.sectionTitle}>Amenities</h3>
          <ul className={styles.detailsList}>
            {Object.entries(roomData.amenities).map(([key, value]) => (
              <li key={key}>
                {key}: {value ? "Yes" : "No"}
              </li>
            ))}
          </ul>

          <h3 className={styles.sectionTitle}>Highlights</h3>
          <ul className={styles.detailsList}>
            {Object.entries(roomData.highlights).map(([key, value]) => (
              <li key={key}>
                {key}: {value ? "Yes" : "No"}
              </li>
            ))}
          </ul>

          <h3 className={styles.sectionTitle}>Created By</h3>
          <p>Name: {roomData.createdBy.name}</p>
          <p>Email: {roomData.createdBy.email}</p>
          <p>Gender: {roomData.createdBy.gender}</p>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
