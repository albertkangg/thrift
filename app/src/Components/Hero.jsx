import React from "react";
import "./Hero.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/shoppinghome')
  }

  return (
    <div className="Hero">
      <div className="hero-text">
          <h1 className="hero-title">Buying and Selling for Students, Simplified. </h1>
        <ul>
          <li>made by uva students</li>
          <li>aaaaaaaaaaaaaa</li>
          <li>bbbbbbbbbbbbbbbbb</li>
          <li>ccccccccccccccc</li>
          <li>dddddddddddddd</li>
          <li>eeeeeeeeeeeeeeeeeeeeeee</li>
        </ul>
        <Button variant="contained" 
        sx={{ width: '200px', 
        height: '50px', 
        fontSize: '15px', 
        mt: 3, 
        backgroundColor: "#000",
        '&:hover': {
              backgroundColor: '#808080',  // Custom hover color
            }, }}

            onClick={handleButtonClick}
        >
          Start Shopping
        </Button> 

      </div>
      <div className= "crop-container">
        <img src="../images/fashionHero.jpg" alt="fashionable black man" />
      </div>
    </div>
  );
}

export default Hero;