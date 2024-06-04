import React, { useState } from 'react';
import { TextField, Button, InputLabel } from '@mui/material';
import loginImage from '../images/login2.png';
import './login.css';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing in the password field
    if (name === 'password' && error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error message

    try {
      const response = await axios.post("http://localhost:8000/api/login", formData);
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/basic";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Password is incorrect. Try again or change your password.');
      } else {
        setError('An error occurred. Please try again later.');
      }
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="form-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <TextField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            placeholder='abc@nsec.ac.in'
          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            className='password-text-field'
          />
          {error && <p className="error-message">{error}</p>}
          <div className="forgot-password">
            <h4>Forgot your password?</h4>
            {/* <Link to="/reset">Reset</Link> */}
          </div>
          <Button variant="contained" type="submit" className="login-button">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
