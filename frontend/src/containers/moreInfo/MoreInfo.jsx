import React from 'react';
import './moreInfo.css';
import logo1 from '../../assets/moreInfoBanner.webp';
import logo2 from '../../assets/handWashing.jpg';
import logo3 from '../../assets/maskNew.jpg';


const MoreInfo = () => {

  return (
    <div id='More Information'>
      <h1 className="h1_MoreInfo">More Information</h1>
    <div className="container_moreInformation" style={{backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "130vh"}}>
        {/* <img className = "logo1" src={logo1} alt="Students wearing masks in class raising their hands. /logo"/>  */}
      <div className="moreInformationItem" style={{marginTop: "50px"}}>
        <h2>What is Covid-19?</h2>
        <p>
          Covid-19 is a deadly disease caused by a virus named SARS-CoV-2. It can 
          be contagious and spread quickly depending on how quick the public are able to adapt to precautions. It is primarily transmitted through infected individuals droplets caused by sneezing and coughing. While symptoms may be similar to the common flu, Covid-19 can quickly overcome the body’s immune system leading to death.
        </p>
          {/*<h2>How to wash your hands</h2>
            <img src={logo2} alt="infographic explaining how to wash your hands effectly"/>*/}
      </div>
      <div className="moreInformationItem">
      <h2>What are the Symptoms?</h2>
        <ul>
        <li>Fever or chills</li>
        <li>Cough</li>
        <li>Shortness of breath or difficulty breathing</li>
        <li>Fatigue</li>
        <li>Muscle or body aches</li>
        <li>Headache</li>
        </ul>
      </div>

      <div className="moreInformationItem">
        <h2>How can you protect yourself?</h2>
        <p>To protect yourself and others from Covid-19 individuals are recommended to wear a mask in public to protect from infected droplets and reduce spread. Individuals should also wash their hands frequently as well as schedule an appointment for vaccination. In addition, social distancing is recommended to help reduce spread through infected droplets in the air.</p>
      </div>
      <div className="moreInformationItem" style={{marginBottom: "50px"}} >
        <h2>How does it spread?</h2>
        <p>
          Covid-19 primarily spreads through infected droplets transmitted through the 
          air and surfaces. A common way Covid-19 transmits is through contaminated public 
          surfaces such as handrails, door handles, and even handshakes. When individuals 
          do not wear masks in public they increase their likelihood of exposure through 
          infected droplets produced by infected individuals.
        </p>
      </div> 
    </div>
    </div>
  )
}

export default MoreInfo
// use padding, margin, box model to keep compt seperate. Investigate divider section  options.