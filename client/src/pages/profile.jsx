import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Replace 'token' with your actual token key
      try {
        const response = await axios.get('http://localhost:8000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the profile data', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button> {/* Add logout button */}
      {profile && (
        <>
          <h2>{profile.name}</h2>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>From:</strong> {profile.from}</p>
          <p><strong>Stream:</strong> {profile.stream}</p>
          <p><strong>Year of Passing:</strong> {profile.yearOfPassing}</p>
          <h3>Preferences</h3>
          <ul>
            {Object.keys(profile.preferences).map(key => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {profile.preferences[key] ? 'Yes' : 'No'}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Profile;
