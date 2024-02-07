import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/AJ.png';
import searchIconLight from '../../assets/images/search-w.png';
import searchIconDark from '../../assets/images/search-b.png';
import toggleLight from '../../assets/images/night.png';
import toggleDark from '../../assets/images/day.png';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/ROUTES';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [navActive, setNavActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState("nav__toggler")
  const navToggle = () => {
    setNavActive((prevNavActive) =>
      prevNavActive === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu'
    );
    toggleIcon=== 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
  };

  useEffect(() => {
    // Update the local storage when the theme changes
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
      <Link to={ROUTES.HOME}><img src={logo} alt="logo" className="logo" /></Link>
      <ul className={navActive}>
        <li className="nav__item">
            <Link className="nav__link" to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Products
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === 'light' ? searchIconLight : searchIconDark}
          alt="search icon"
        />
      </div>
      <img
        src={theme === 'light' ? toggleLight : toggleDark}
        alt="toggle icon"
        className="toggle-icon"
        onClick={toggleMode}
      />
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
