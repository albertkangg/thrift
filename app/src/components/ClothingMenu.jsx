import React from 'react'
import { Link } from "react-router-dom";
import './ClothingMenu.css';
 
const ClothingMenu = () => {
  return (
    <div className='clothing'>
        <div className = 'clothing-container'>
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

export default ClothingMenu
