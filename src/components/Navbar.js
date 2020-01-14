import React, { useState } from 'react';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.scss';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <ul className="navbar__container">
        <li className="navbar__logo">
          <a href="#">LOGO</a>
        </li>
        <li className={`navbar__item ${isActive ? 'active' : ''}`}>
          <a href="#">Home</a>
        </li>
        <li className={`navbar__item ${isActive ? 'active' : ''}`}>
          <a href="#">About</a>
        </li>
        <li className={`navbar__item ${isActive ? 'active' : ''}`}>
          <a href="#">Contact</a>
        </li>
        <li className={`navbar__item ${isActive ? 'active' : ''}`}>
          <a href="#">
            <IoIosSearch size="20" />
          </a>
        </li>
        <li className="navbar__toggle">
          <a href="#" onClick={handleToggle}>
            {isActive ? <IoMdClose /> : <GiHamburgerMenu />}
          </a>
        </li>
      </ul>
    </nav>
  );
}
