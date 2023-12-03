import React from 'react';
import './header.css';
import logo1 from '../../assets/masksBanner.jpg';

const Header = () => {
  return (
    <div className = "image-container">
      <img className = "image-mask" src ={logo1} alt="Mask banner" /> 
      <div className="overlay-text"> 
        <h1 className="tracking-in-expand-fwd">COVID-19 HUB: Local Resources</h1>
        <p>Welcome to the San Bernardino COVID-19 Resource Page; your 
        go-to hub for local updates and essential information. Stay informed about the 
        latest developments, vaccination centers, testing sites, and community resources 
        in San Bernardino and its surrounding areas. Our goal is to provide a centralized source 
        to empower and support our community during these challenging times. Together, we can 
        navigate through the pandemic with knowledge and resilience. #StaySafeSanBernardino
      </p>
      </div>
    </div>
  )
};

export default Header
// create new folder for texts and link to program
