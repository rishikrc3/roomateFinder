import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
// import registerImage from "../images/register.png";
import "./Register.css";

const minYear = 2000;
const maxYear = 2050;
const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);

const streamData = [
  { value: "AEIE", label: "AEIE" },
  { value: "BME", label: "BME" },
  { value: "CSE", label: "CSE" },
  { value: "ECE", label: "ECE" },
  { value: "IT", label: "IT" },
  { value: "EE", label: "EE" },
  { value: "CE", label: "CE" },
  { value: "CSBS", label: "CSBS" },
  { value: "ME", label: "ME" },
  { value: "CSE(AIMLL)", label: "CSE(AIMLL)" },
];

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
    window.location.href = "/basic";

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
        window.location.href = "/basic";

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

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Year of Passing</InputLabel>
            <Select
              value={formData.yearOfPassing}
              onChange={handleChange}
              name="yearOfPassing"
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    width: 80,
                  },
                },
              }}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Stream</InputLabel>
            <Select
              value={formData.stream}
              onChange={handleChange}
              name="stream"
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    width: 250,
                  },
                },
              }}
            >
              {streamData.map((stream) => (
                <MenuItem key={stream.value} value={stream.value}>
                  {stream.label}
                </MenuItem>
              ))}
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