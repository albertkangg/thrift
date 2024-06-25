import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='top-half'>
          <img src="/images/depop temp.png" alt="" className='logo'/>

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
      <div className='bottom-half'>
        <ul className='clothing-menu'>
                <li className='clothing-item'>
                <Link
                    to="/market"
                    className="clothing-links"
                  >
                    Menswear
                  </Link>
                </li>
                <li className='clothing-item'>
                <Link
                    to="/market"
                    className="clothing-links"
                  >
                    Womenswear
                  </Link>
                </li>
                <li className='clothing-item'>
                <Link
                    to="/market"
                    className="clothing-links"
                  >
                    New
                  </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
