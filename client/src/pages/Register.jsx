import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import registerImage from "../images/register.png";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    from: "",
    stream: "",
    yearOfPassing: "",
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
      nonSmoker: false,
    },
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Add form submission logic here
    console.log(formData);
    // Send data to the server
    sendDataToServer();
  };

  const sendDataToServer = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Request Data:", formData);
      console.log("Response:", responseData);
      if (response.ok && responseData.token) {
        localStorage.setItem("token", responseData.token);
        // window.location.href="/rooms";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="register-heading">Register</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className="register-button"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
