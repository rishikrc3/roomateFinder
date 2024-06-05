import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  Grid,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import "./Register.css"; // Assuming you have similar styles for Register and RoomForm

const RoomForm = () => {
  const [formData, setFormData] = useState({
    messName: "",
    location: "",
    lookingFor: "",
    rent: "",
    occupancy: "",
    contactNo: "",
    preferenceStream: "",
    highlights: {
      AttachedWashroom: false,
      MarketNearby: false,
      CloseToMetroStation: false,
      PublicTransportNearby: false,
      NoRestriction: false,
      GymNearby: false,
      Housekeeping: false,
    },
    amenities: {
      Tv: false,
      Wifi: false,
      Fridge: false,
      Kitchen: false,
      PowerBackup: false,
      Cook: false,
      Parking: false,
      Ac: false,
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

  const handleSwitchChange = (category, name) => (e) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [name]: e.target.checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/rooms/",
        JSON.stringify(formData),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      window.location.href = "/success";
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    }
  };

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
    { value: "CSE(AI/ML)", label: "CSE(AI/ML)" },
  ];

  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="register-heading">Add Your Requirement</h2>
        <p className="paragraph">To find a compatible roommate</p>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Mess Name"
                type="text"
                name="messName"
                value={formData.messName}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Looking For</InputLabel>
                <Select
                  value={formData.lookingFor}
                  onChange={handleChange}
                  name="lookingFor"
                >
                  <MenuItem value="any">Any</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Rent"
                type="number"
                name="rent"
                value={formData.rent}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Occupancy</InputLabel>
                <Select
                  value={formData.occupancy}
                  onChange={handleChange}
                  name="occupancy"
                >
                  <MenuItem value="Double">Double</MenuItem>
                  <MenuItem value="Triple">Triple</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Contact No."
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                inputProps={{ pattern: "[0-9]{10}" }}
                helperText="Contact number must be 10 digits long!"
              />
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Preference Stream</InputLabel>
                <Select
                  value={formData.preferenceStream}
                  onChange={handleChange}
                  name="preferenceStream"
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
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
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>Highlights</h3>
              <div className="preferences-container">
                {Object.keys(formData.highlights).map((highlight) => (
                  <FormControlLabel
                    key={highlight}
                    control={
                      <Switch
                        checked={formData.highlights[highlight]}
                        onChange={handleSwitchChange("highlights", highlight)}
                        name={highlight}
                      />
                    }
                    label={highlight.replace(/([A-Z])/g, " $1")}
                  />
                ))}
              </div>
              <h3>Amenities</h3>
              <div className="preferences-container">
                {Object.keys(formData.amenities).map((amenity) => (
                  <FormControlLabel
                    key={amenity}
                    control={
                      <Switch
                        checked={formData.amenities[amenity]}
                        onChange={handleSwitchChange("amenities", amenity)}
                        name={amenity}
                      />
                    }
                    label={amenity.replace(/([A-Z])/g, " $1")}
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
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RoomForm;
