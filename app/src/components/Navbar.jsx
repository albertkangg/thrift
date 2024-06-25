import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='top-half'>
        <Link to="/"><img src="/images/depop temp.png" alt="" className='logo' /></Link>

          <div className='search-box-container'>
              <img src="/images/search.png" alt=""/>
              <input className='search-box' type="text" placeholder='Search'/>
          </div>

          <ul className='nav-menu'>
              <li className='nav-item'>
              <Link
                  to="/sell"
                  className="nav-links"
                >
                  Sell
                </Link>
              </li>
              <li className='nav-item'>
              <Link
                  to="/login"
                  className="nav-links"
                >
                  Login
                </Link>
              </li>
              <li className='nav-item'>
              <Link
                  to="/signup"
                  className="nav-links"
                >
                  Sign Up
                </Link>
              </li>
          </ul>
      </div>  
    </div>
  )
}

export default Navbar
