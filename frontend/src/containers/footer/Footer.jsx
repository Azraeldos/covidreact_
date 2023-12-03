import React from 'react';
import './footer.css';
import logo1 from '../../assets/newLogo.png';
const Footer = () => {
  return (
    <div id='footer' className="container_footer">
        <div class = "picture2" >
      <img src={logo1} alt="/Logo"/>
      <br />
      <div id='logoText'>
      <p> © 2023 Covid-Answers</p>
      </div>
      </div>
    </div>
  )
}

export default Footer