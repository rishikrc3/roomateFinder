import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar4.css';

const NewNavbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        <Link to="/" className="brand-link">
          <Typography variant="h4" component="div" className="brand">
            <span className="brand-highlight">N</span>est
          </Typography>
        </Link>
        <div className="navbar-links">
          <Link to="/add-post" className="nav-link">
            <Button color="inherit">+ Add Post</Button>
          </Link>
          <Link to="/profile" className="nav-link">
            <i className="fas fa-user-circle fa-lg"></i>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NewNavbar;
