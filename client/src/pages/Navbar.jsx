import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Messmate
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About us</Button>
        <Button color="inherit">Credits</Button>
        <Link to ="/login"><Button color="inherit">Login</Button></Link>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
