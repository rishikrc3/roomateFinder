import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import loginImage from '../images/login.png';
import {useHistory} from "react-router-dom"
import axios from 'axios';
import './Pages.css';

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

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        const response = await axios.post("http://localhost:8000/api/login",formData);
        const token = (response.data.token);
        localStorage.setItem("token",token);
        //history.push("/basic")
    }catch(error){
      console.error(error);
    }

  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
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
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <Button variant="contained" type="submit" color="primary" className="login-button">
            Login
          </Button>
          <div className="options">
          <a href="#" className="google-login">Continue with Google</a>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        </form>
      </div>
      <div className="image-container">
        {<img src={loginImage} alt="Login" /> }
      </div>
    </div>
  );
};

export default LoginPage;
