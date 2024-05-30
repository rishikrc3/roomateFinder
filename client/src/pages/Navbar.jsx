import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nest
        </Typography>
        {/* <Button color="inherit">Home</Button> */}
        <Link to ="/login"><Button color="inherit">Login</Button></Link>
        <Link to ="/register"><Button color="inherit">Register</Button></Link>
        {/* <Button color="inherit">About us</Button>
        <Button color="inherit">Credits</Button> */}
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
