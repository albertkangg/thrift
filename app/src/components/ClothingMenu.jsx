import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './ClothingMenu.css';
import { ClothingItems } from '../ClothingItems';
import Dropdown from './Dropdown';
 
const ClothingMenu = () => {
  const [dropdown_men,setDropdownMen] = useState(false);
  const [dropdown_women,setDropdownWomen] = useState(false);
  const [dropdown_new,setDropdownNew] = useState(false);


  return (
    <div className='clothing'>
        <div className = 'clothing-container'>
            <ul className='clothing-menu'>
                <li className='clothing-item'
                onMouseEnter={() => setDropdownMen(true)}
                onMouseLeave={() => setDropdownMen(false)}>
                  { dropdown_men && <Dropdown />}
                <Link
                    to="/market"
                    className="clothing-links"
                  >
                    Menswear
                  </Link>
                </li>
                <li className='clothing-item'
                onMouseEnter={() => setDropdownWomen(true)}
                onMouseLeave={() => setDropdownWomen(false)}>
                  { dropdown_women && <Dropdown />}
                <Link
                    to="/market"
                    className="clothing-links"
                  >
                    Womenswear
                  </Link>
                </li>
                <li className='clothing-item'
                onMouseEnter={() => setDropdownNew(true)}
                onMouseLeave={() => setDropdownNew(false)}>
                  { dropdown_new && <Dropdown />}
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
