import React from 'react';
import './donations.css';
import logo1 from '../../assets/donateItems.jpg';
const Donations = () => {
  return (
    <div id='Donations'>
      <h1 className="h1_donations">Donations</h1>
      <div className="container_donations"style={{backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh"}}>

        <div class="container_donationsItem">
          <h2>Inland Empire Community Foundation</h2>
          <p>A local non-profit organization dedicated to improving the lives of people in the Inland Empire. Has a number of funds established to support the community during COVID-19.</p>
          <a href="https://inlandempire.fcsuite.com/erp/donate/list" target="_blank"><button type="button" class="donate-button">Donate Now</button></a>
        </div>
  
        <div class="container_donationsItem">
          <h2>Feeding America Riverside-San Bernardino</h2>
          <p>Feeding America distributes food to over 400 food banks and pantries in San Bernardino County.</p>
          <a href="https://www.feedingamericaie.org/donate" target="_blank"><button type="button" class="donate-button">Donate Now</button></a>
        </div>
  
        <div class="container_donationsItem">
          <h2>Salvation Army</h2>
          <p>The Inland Empire Division of the Salvation Army provides food distribution, rental assistance, and homeless services to people in need in the Inland Empire.</p>
          <a href="https://give-sdm.salvationarmy.org/give/173402/#!/donation/checkout" target="_blank"><button type="button" class="donate-button">Donate Now</button></a>
        </div>    
      </div>
    </div>
  )
}

export default Donations