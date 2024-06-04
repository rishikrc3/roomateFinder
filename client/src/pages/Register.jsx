import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import "./Register.css";

const minYear = 2000;
const maxYear = 2050;
const years = Array.from(
  { length: maxYear - minYear + 1 },
  (_, i) => minYear + i
);

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

const preferencesList = [
  "Nightowl",
  "EarlyBird",
  "Studious",
  "FitnessFreak",
  "Sporty",
  "PetLover",
  "PartyLover",
  "NonAlcoholic",
  "MusicLover",
  "NonSmoker",
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    from: "",
    stream: "",
    yearOfPassing: "",
    preferences: {
      Nightowl: false,
      EarlyBird: false,
      Studious: false,
      FitnessFreak: false,
      Sporty: false,
      PetLover: false,
      PartyLover: false,
      NonAlcoholic: true,
      MusicLover: false,
      NonSmoker: true,
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        [name]: checked,
      },
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
        window.location.href = "/login";
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
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
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
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
              {error && <p className="error-message">{error}</p>}
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>Preferences</h3>
              <div className="preferences-container">
                {preferencesList.map((preference) => (
                  <FormControlLabel
                    key={preference}
                    control={
                      <Checkbox
                        checked={formData.preferences[preference]}
                        onChange={handleCheckboxChange}
                        name={preference}
                      />
                    }
                    label={preference}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
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
