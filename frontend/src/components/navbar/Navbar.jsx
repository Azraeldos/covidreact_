import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri' ;
import logo1 from '../../assets/newLogo.png';
import './navbar.css';
const Navbar = () => {
  return (
    <nav class="navbar">
        <ul>
          {/*<div id='navbar-links_logo'>
          <img src={logo1} alt="Logo" /> Resize logo
          </div>*/}
          <li><a href="#top">Home</a></li>
          <li><a href="#More Information">More Information</a></li>
          <li><a href="#Testing">Testing</a></li>
          <li><a href="#Vaccinations">Vaccinations</a></li>
          <li><a href="#Volunteer">Volunteer</a></li>
          <li><a href="#Donations">Donations</a></li>
        </ul>
      </nav>
  )
};

export default Navbar