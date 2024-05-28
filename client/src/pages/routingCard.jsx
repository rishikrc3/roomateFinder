import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './routingCard.css';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/rooms/${id}`);
        setRoom(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch room details');
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="room-details-container">
      <h1>Room Details</h1>
      {room ? (
        <div className="room-card">
          <h2>Mess Name: {room.messName}</h2>
          <p>Location: {room.location}</p>
          <p>Looking For: {room.lookingFor}</p>
          <p>Rent: {room.rent} INR</p>
          <p>Occupancy: {room.occupancy}</p>
          <p>Contact No: {room.contactNo}</p>
          <h3>Highlights</h3>
          <ul>
            <li>Attached Washroom: {room.highlights.attachedWashroom ? 'Yes' : 'No'}</li>
            <li>Market Nearby: {room.highlights.marketNearby ? 'Yes' : 'No'}</li>
          </ul>
          <h3>Amenities</h3>
          <ul>
            <li>WiFi: {room.amenities.wifi ? 'Yes' : 'No'}</li>
            <li>TV: {room.amenities.tv ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      ) : (
        <p>No room details found.</p>
      )}
    </div>
  );
};

export default RoomDetails;
