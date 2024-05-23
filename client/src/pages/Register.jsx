import React, {useState} from 'react';  
import ReactDOM from 'react-dom';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import registerImage from '../images/register.png'
// import './Pages.css'
import './Register.css'

const Register=()=>{
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
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
      }});
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log(formData);
      };
    
    return (
    <>
    <div className="register-container"> 
      <div className="form-container">
      <h2 className="register-heading">Register</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
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
            name="location"
            value={formData.location}
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
          <Button variant="contained" type="submit" color="primary" className="register-button">
            Register
          </Button>
        </form>
      </div>
        <div className="image-container">
        <img src={registerImage} alt="Register" />
      </div>
      
    </div>
     
    </>
    )
}
export default Register;