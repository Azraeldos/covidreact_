import React from 'react';
import './vaccinations.css';
import logo1 from '../../assets/covid19VaxCard.jpg';
const Vaccinations = () => {
  return (
    <div id = "Vaccinations">
      <h1 className="h1_vaccinations">Vaccinations</h1>
      <div className="container_vaccinations" style={{backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh"}}>
        <ul class="accordion">
          <li>
              <input type="checkbox" name="accordion" id="first"/>
              <label for="first">Why Get Vaccinated?</label>
              <div class="content">
                  <p class="answer">Getting vaccinated against COVID-19 is one of the most important 
                    things you can do to protect yourself and your loved ones from the 
                    virus. COVID-19 vaccines are safe and effective at preventing 
                    serious illness, hospitalization, and death. They have been 
                    rigorously tested and monitored, and they are millions of times 
                    safer than getting sick with COVID-19.
                  </p>
              </div>
          </li>
          <li>
              <input type="checkbox" name="accordion" id="second"/>
              <label for="second">What Vaccinations are Available?</label>
              <div class="content">
                  <p class="answer">There are three vaccinations authorized by the FDA. They are the 
                    Pfizer-BioNTech, Moderna, and Novavax COVID-19 vaccines. The first 
                    two are mRNA vaccines and the latter is a protein subunit vaccine.
                  </p>
              </div>
          </li>
          <li>
              <input type="checkbox" name="accordion" id="third"/>
              <label for="third">Are Vaccines Trustworthy?</label>
              <div class="content">
                  <p class="answer">
                    Yes! Although the Pfizer-BioNTech and Moderna vaccines were developed
                    rapidly, both companies have research mRNA vaccination since 2008 and 
                    2010, respectively.
                </p>
              </div>
          </li>
          <li>
            <input type="checkbox" name="accordion" id="fourth"/>
            <label for="fourth">What if I can't afford a vaccination?</label>
            <div class="content">
              <p class="answer">
                Almost all insurance providers will cover the cost of your COVID-19
                vaccine. Although federal funding has ended for COVID-19 vaccination, 
                they are still free to the uninsured if you book through <b>My Turn</b>.
              </p>
              <a href="https://myturn.ca.gov/en_US.html" target="_blank">
                <button type="button" class = "donate-button" href="https://myturn.ca.gov/">
                  My Turn
                </button>
              </a>
            </div>
          </li>
          <li>
            <input type="checkbox" name="accordion" id="fifth"/>
            <label for="fifth">Where can I get vaccinated?</label>
            <div class="content">
              <p class="answer">
                Vaccination appointments can be either made through your healthcare
                provider. Alternatively, you can book an appointment through <b>My Turn</b>
              </p>
              <a href="https://myturn.ca.gov/en_US.html" target="_blank">
                <button type="button" class = "donate-button" href="https://myturn.ca.gov/">
                  My Turn
                </button>
              </a>
            </div>
          </li>
          <li>
            <input type="checkbox" name="accordion" id="sixth"/>
            <label for="sixth">Can you give me more information on vaccines?</label>
            <div class="content">
              <p class="answer">
                More detailed information including research articles on all aspects of COVID-19 
                can be found on the CDC website.
              </p>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html" target="_blank">
                <button type="button" class = "donate-button" href="https://myturn.ca.gov/">
                  CDC COVID-19 Vaccinations
                </button>
              </a>
            </div>
          </li>
      </ul>
     </div>
     </div>
    
  )
}

export default Vaccinations
// figure out the styling in jsx for buttons