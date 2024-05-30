import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar3.css';

const Navbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Link to="/" className="brand-link">
          <Typography variant="h4" component="div" className="brand">
            <span className="brand-highlight">N</span>est
          </Typography>
        </Link>
        <div className="navbar-links">
          <Link to="/login" className="nav-link">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/register" className="nav-link">
            <Button color="inherit">Register</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
