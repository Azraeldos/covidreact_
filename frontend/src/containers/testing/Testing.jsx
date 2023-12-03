import React from 'react';
import './testing.css';
import logo1 from '../../assets/covidTestKit.webp';

const Testing = () => {
  return (
    <div>
     <h1 className="h1_testing">Testing</h1>
      <div className="container_testing" id ="Testing" style={{backgroundImage: `url(${logo1})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", width: "100vw", height: "100vh"}}>

        <div class="testing_item">
          <h2>Importance of Testing</h2>

          <p>
            Testing for COVID-19 is important because it can help to identify and 
            stop the spread of the virus, even among people who are asymptomatic.
            Asymptomatic people are still able to spread the virus to others.
          </p>

        </div>
        <div class="testing_item">
          <h2>Types of Tests</h2>
          <p>
            Two main types of COVID-19 tests exist: Polymerase Chain Reaction (PCR) 
            tests and antigen tests. PCR tests are more reliable and the type you 
            are most likely to receive at a testing site.
          </p>
          <p>
            A healthcare provider or yourself can collect your sample, which will 
            then be transported to a laboratory for testing. Results are usually 
            available within 3 days.
          </p>
        </div>
        <div class="testing_item" >
          <h2>Should You Get Tested?</h2>
          <p>
            The current recommendation from the CDC is to get tested immediately 
            symptoms are present. 
          </p>
          <p>
            If you are asymptomatic but have been exposed to COVID-19, wait at
            least 5 full days after your exposure before taking a test.
          </p>
        </div>    

        
        
      </div>
      <div class="test_below_text">
      <div class="testing_item">
          <h2>Where can I get tested?</h2>
          <p>
            My Turn allows you to search for local testing by ZIP code:
          </p>

          <a href="https://myturn.ca.gov/testing.html" target="_blank">
            <button type="button" class="donate-button">
              My Turn Testing
            </button>
          </a>
          <p>
            Every household can also order four free COVID-19 tests delivered to
            your home from the U.S. Government.
          </p>
          <a href="https://www.covid.gov/tests" target="_blank">
            <button type="button" class ="donate-button" href="https://www.covid.gov/tests">
              COVID-19 Tests
            </button>
          </a>

        </div>
        <div class="testing_item">
          <h2>I tested positive. Now what?</h2>
          <p>
            <b>Isolate yourself from others.</b> Stay home and away from other people, 
            including those you live with. If you must be around others, wear a mask.
          </p>
          <p>
            <b>Monitor your symptoms.</b>If your symptoms worsen, seek medical attention.
          </p>
          <p>
            <b>Contact your heatlhcare provider.</b>They can discuss your treatment 
            options and help to develop a plan to recover safely.
          </p>
        </div>
        <div class="testing_item">
          <h2>I tested negative. Now what?</h2>
          <p>
            A negative COVID-19 test means only that the test did not detect the virus.
            PCR tests are 95% accurate, which means you could still be infected.
            The current FDA guidelines suggest repeating the test after 48 hours for 
            at least three total tests (test 3 times!).
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testing