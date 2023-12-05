import React from 'react';
import './volunteer.css';
import logo1 from '../../assets/volunteerColorfulHands.png';
const Volunteer = () => {
  return (
    <div id ='Volunteer'>
      <h1 className="h1_volunteer">Volunteer</h1>
      <div className="container_volunteer" style={{backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh"}}>
        <div class="container_volunteerItem">
          <h2>American Red Cross</h2>
          <p>The Red Cross is always in need of blood donors. Blood donations are especially important during the pandemic.</p>
          <a href="https://www.redcross.org/" target="_blank"><button type="button" class="donate-button">Volunteer</button></a>
        </div>

        <div class="container_volunteerItem">
          <h2>Meals on Wheels</h2>
          <p>Meals on Wheels provides meals to homebound people, such as those that are immunocompromised during the pandemic. Volunteers can help by cooking, packing, and/or delivering meals.</p>
          <a href="https://www.mealsonwheelsamerica.org/" target="_blank"><button type="button" class="donate-button">Volunteer</button></a>
        </div>

        <div class="container_volunteerItem">
          <h2>San Bernardino County Volunteer Hub</h2>
          <p>San Bernardino County is always looking for volunteers to help locally with general support.</p>
          <a href="https://hr.sbcounty.gov/volunteerhub/" target="_blank"><button type="button" class="donate-button">Volunteer</button></a>
        </div>    
  </div>
  </div>
  )
}

export default Volunteer
// figure out styling for jsx