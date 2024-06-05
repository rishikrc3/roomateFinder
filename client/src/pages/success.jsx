import React from "react";
import { useNavigate } from "react-router-dom";
import "./success.css";
import successImage from '../images/successImage.png';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/basic"); 
  };

  return (
    <div className="success-container">
      <div className="success-box">
        <h2 className="h2-text">Your requirement is successfully created</h2>
        <button onClick={handleRedirect} className="redirect-button">
          Go to Basic Page
        </button>
        <div className="success-image-container">
          <img src={successImage} alt="success" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
