import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function ShoppingHome() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/')
    }

  return (
    <div>
      <h1>Shopping Home</h1>

      <Button variant='contained' onClick={handleButtonClick}>
        Home
      </Button>
    </div>
  );
}

export default ShoppingHome;