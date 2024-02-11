import { Container } from '@mui/system'
import React from 'react'
import './NotFoundPage.css'
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import ROUTES from '../../routes/ROUTES';
import { Link, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate=useNavigate();
  const handleButtonClick=()=>{
    navigate(ROUTES.HOME);
  };
  return (
    <div className="notFoundContainer">
    <div className='notfoundDiv'>
        <div className='text404'>404</div>
        <h1>You have found a secret place.</h1>
        <h2>Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.</h2>
          <IconButton onClick={handleButtonClick} aria-label="add an alarm">
            <HomeIcon />
          </IconButton>
    </div>
    </div>
  )
}

export default NotFoundPage
