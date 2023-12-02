import React from 'react';
import './intro.css';
import logo1 from '../../assets/deathByAge.png';
import logo2 from '../../assets/Rvalue.png';
import logo3 from '../../assets/monthlyConfirmCases09-10.png';
const Intro = () => {
  return (
    <div class = "container">
      
      

        {/* <div><h1>Covid-Answers</h1></div>
      <div class = "column">
        <div class = "picture1" >
        <img src= {logo1} alt="Pie" />
        <h1>How does age affect you?</h1>
        <p>Age plays a key role in the human body's response to Covid-19.
           Elderly individuals are the more susceptible to death caused Covid-19 due to having a weaker immune system.
            While younger individuals are more likely to survive they are just as susceptible to death due how quickly 
            Covid-19 attacks the immune system.</p>
            </div>
      </div>
      <div class = "column">
      <img src={logo2} alt="Monthly" />
      <h1>What is an R value?</h1>
      <p>R value stands for Reproduction and it is in relation to how fast something spreads. In this example the R value is being measured to help predict how contagious Covid-19 has been. When the R value reaches 1.00 then an outbreak has occurred meaning the amount of cases of Covid-19 are exponential in the area. </p>
      </div>
        <div class = "column">
      <img src={logo3} alt="Monthly" />
      <h1>Confirmed cases of Covid-19 - September/October</h1>
      <p>Keeping track of Covid-19 cases in your area allows you to be more prepared for any possible outbreaks.
         The line chart above shows the number of positive Covid-19 cases in the San Bernardino area. 
         While positive cases of Covid-19 may be low it is important to remember that the R value plays a key role
          in determining how fast an outbreak can occur.</p>
        </div>
      {/*  */}
    </div>
  )
}

export default Intro
// figure out styling in jsx