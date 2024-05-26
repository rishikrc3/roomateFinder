import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import registerImage from '../images/register.png';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    from: '',
    stream: '',
    yearOfPassing: '',
    preferences: {
      nightowl: false,
      earlyBird: false,
      studious: false,
      fitnessFreak: false,
      sporty: false,
      petLover: false,
      partyLover: false,
      nonAlcoholic: false,
      musicLover: false,
      nonSmoker: false
    }
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      preferences: {
        ...prevState.preferences,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    try {
      const response = await axios.post(
        'http://localhost:8000/api/register',
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setSuccess('Registration successful!');
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
        setError(error.response.data.message || 'Registration failed. Please try again.');
      } else if (error.request) {
        console.error('Request error:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };
  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="register-heading">Register</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Where are you from?"
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Stream"
            type="text"
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Year of Passing"
            type="text"
            name="yearOfPassing"
            value={formData.yearOfPassing}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Gender</InputLabel>
            <Select
              value={formData.gender}
              onChange={handleChange}
              name="gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <div className="preferences-container">
            <h3>Preferences</h3>
            {Object.keys(formData.preferences).map((preference) => (
              <FormControlLabel
                key={preference}
                control={
                  <Checkbox
                    checked={formData.preferences[preference]}
                    onChange={handlePreferenceChange}
                    name={preference}
                  />
                }
                label={preference.charAt(0).toUpperCase() + preference.slice(1)}
              />
            ))}
          </div>
          <Button variant="contained" type="submit" color="primary" className="register-button">
            Register
          </Button>
        </form>
      </div>
      <div className="image-container">
        <img src={registerImage} alt="Register" />
      </div>
    </div>
  );
};

export default Register;
