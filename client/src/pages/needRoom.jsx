import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import axios from "axios";
import "./needRoom.css";

const RoomForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    rent: "",
    contactNo: "",
    lookingFor: "",
    preferenceStream: "",
    description: "",
  });

<<<<<<< HEAD
  const onFinish = async (values) => {
    console.log("Form Values:", JSON.stringify(values));
=======
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.location) tempErrors.location = "Please input the location!";
    if (!formData.rent) tempErrors.rent = "Please input the rent!";
    else if (formData.rent < 0) tempErrors.rent = "Rent must be a positive number!";
    if (!formData.contactNo) tempErrors.contactNo = "Please input your contact number!";
    else if (!/^[0-9]{10}$/.test(formData.contactNo))
      tempErrors.contactNo = "Contact number must be 10 digits long!";
    if (!formData.lookingFor) tempErrors.lookingFor = "Please select an option!";
    if (!formData.preferenceStream) tempErrors.preferenceStream = "Please select a preference stream!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

>>>>>>> main
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/requirements/",
        JSON.stringify(formData),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      window.location.href = "/success";
    } catch (error) {
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
    { value: 'AEIE', label: 'AEIE' },
    { value: 'BME', label: 'BME' },
    { value: 'CSE', label: 'CSE' },
    { value: 'ECE', label: 'ECE' },
    { value: 'IT', label: 'IT' },
    { value: 'EE', label: 'EE' },
    { value: 'CE', label: 'CE' },
    { value: 'CSBS', label: 'CSBS' },
    { value: 'ME', label: 'ME' },
    { value: 'CSE(AI/ML)', label: 'CSE(AI/ML)' },
  ];

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Create a Room Requirement</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Preferred Location"
              name="location"
              fullWidth
              variant="outlined"
              value={formData.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Affordable Rent"
              name="rent"
              fullWidth
              variant="outlined"
              type="number"
              value={formData.rent}
              onChange={handleChange}
              error={!!errors.rent}
              helperText={errors.rent}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact No."
              name="contactNo"
              fullWidth
              variant="outlined"
              value={formData.contactNo}
              onChange={handleChange}
              error={!!errors.contactNo}
              helperText={errors.contactNo}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" required error={!!errors.lookingFor}>
              <InputLabel>Looking For</InputLabel>
              <Select
                label="Looking For"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
              </Select>
              {errors.lookingFor && (
                <div className="error-message">{errors.lookingFor}</div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" required error={!!errors.preferenceStream}>
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
              {errors.preferenceStream && (
                <div className="error-message">{errors.preferenceStream}</div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className="form-submit-button"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RoomForm;


/* import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import axios from "axios";
import "./needRoom.css";

const RoomForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    rent: "",
    contactNo: "",
    lookingFor: "",
    preferenceStream: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.location) tempErrors.location = "Please input the location!";
    if (!formData.rent) tempErrors.rent = "Please input the rent!";
    else if (formData.rent < 0) tempErrors.rent = "Rent must be a positive number!";
    if (!formData.contactNo) tempErrors.contactNo = "Please input your contact number!";
    else if (!/^[0-9]{10}$/.test(formData.contactNo))
      tempErrors.contactNo = "Contact number must be 10 digits long!";
    if (!formData.lookingFor) tempErrors.lookingFor = "Please select an option!";
    if (!formData.preferenceStream) tempErrors.preferenceStream = "Please input the preference stream!";
    if (!formData.description) tempErrors.description = "Please input the description!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/requirements/",
        JSON.stringify(formData),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
      window.location.href = "/success";
    } catch (error) {
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

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Create a Room Requirement</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Preferred Location"
              name="location"
              fullWidth
              variant="outlined"
              value={formData.location}
              onChange={handleChange}
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Affordable Rent"
              name="rent"
              fullWidth
              variant="outlined"
              type="number"
              value={formData.rent}
              onChange={handleChange}
              error={!!errors.rent}
              helperText={errors.rent}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact No."
              name="contactNo"
              fullWidth
              variant="outlined"
              value={formData.contactNo}
              onChange={handleChange}
              error={!!errors.contactNo}
              helperText={errors.contactNo}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" error={!!errors.lookingFor}>
              <InputLabel>Looking For</InputLabel>
              <Select
                label="Looking For"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
              </Select>
              {errors.lookingFor && (
                <div className="error-message">{errors.lookingFor}</div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Preference Stream"
              name="preferenceStream"
              fullWidth
              variant="outlined"
              value={formData.preferenceStream}
              onChange={handleChange}
              error={!!errors.preferenceStream}
              helperText={errors.preferenceStream}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className="form-submit-button"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default RoomForm;
 */