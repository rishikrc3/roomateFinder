import React, { useState } from 'react';
import { TextField, Button, InputLabel,  } from '@mui/material';
import loginImage from '../images/login.png';
import './login.css'

import axios from 'axios';
// import './Pages.css';
//import './Login.css';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  //coo

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/login", formData);
      const token = (response.data.token);
      localStorage.setItem("token", token);
      window.location.href = "/basic";
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="login-container">
      <div className="image-container">
        {<img src={loginImage} alt="Login" />}
      </div>
      <div className="form-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <TextField
            // label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            placeholder='abc@nsec.ac.in'
            // style={{ '::placeholder': { fontWeight: 'bolder' } }}

          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            // label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            className='password-text-field'
          />
          <div className="forgot-password"><h4>Forgot your password? {/* <Link to="/reset">Reset</Link> */}</h4></div>

          {/* //can you create a forgot password section here? */}
          <Button variant="contained" type="submit" className="login-button">
            Login
          </Button>
          {/* <div className="options">
            <a href="#" className="google-login">Continue with Google</a>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div> */}
        </form>
      </div>

    </div>
  );
};

export default LoginPage;
