import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar3 from './pages/components/Navbar3';
import Navbar4 from './pages/components/Navbar4';
import Footer from './pages/Footer';

function App() {
  const location = useLocation();

  // Define a function to determine which navbar to render based on the current location
  const renderNavbar = () => {
    // Check the pathname to decide which navbar to render
    if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register') {
      return <Navbar3 />;
    } else {
      // Render the default navbar for all other pages
      return <Navbar4 />;
    }
  };

  return (
    <>
      <div className="App">
        {renderNavbar()}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
