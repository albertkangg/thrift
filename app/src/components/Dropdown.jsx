import React, { useState } from 'react'
import { ClothingItems } from '../ClothingItems';
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
    const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdown-container">
        <ul className="clothing-types">
            <li className="clothing-types-text">Tops</li>
            <li className="clothing-types-text">Bottoms</li>
            <li className="clothing-types-text">Other</li>
        </ul>
        <ul className={dropdown ? "clothing-submenu clicked" : "clothing-submenu"} onClick={() => setDropdown(!dropdown)}>
            {ClothingItems.map((item) => {
                return (
                    <li className="clothing-submenu-list" key={item.id} onClick={() => setDropdown(false)}>
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Dropdown
