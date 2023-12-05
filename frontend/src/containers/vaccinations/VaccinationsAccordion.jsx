import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'bootstrap/dist/css/bootstrap.min.css';

export default function VolunteerAccordion() {
    return (
        <Accordion className="acc">
            <Accordion.Item className = 'acc-item' eventKey="0">
                <Accordion.Header className="acc-header">
                    Why Get Vaccinated?
                </Accordion.Header>
                <Accordion.Body className="acc-body">
                    <p>
                    Getting vaccinated against COVID-19 is one of the most important 
                    things you can do to protect yourself and your loved ones from the 
                    virus. COVID-19 vaccines are safe and effective at preventing 
                    serious illness, hospitalization, and death. They have been 
                    rigorously tested and monitored, and they are millions of times 
                    safer than getting sick with COVID-19.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className = 'acc-item' eventKey="1">
            <Accordion.Header className="acc-header">
                    What Vaccinations are Available?
                </Accordion.Header>
                <Accordion.Body className='acc-body'>
                    <p>
                    There are three vaccinations authorized by the FDA. They are the 
                    Pfizer-BioNTech, Moderna, and Novavax COVID-19 vaccines. The first 
                    two are mRNA vaccines and the latter is a protein subunit vaccine.
                    </p>
                </Accordion.Body >
            </Accordion.Item>
            <Accordion.Item className='acc-item' eventKey="2">
            <Accordion.Header className="acc-header">
                    Are Vaccines Trustworthy?
                </Accordion.Header>
                <Accordion.Body className='acc-body'>
                    <p>
                    Yes! Although the Pfizer-BioNTech and Moderna vaccines were developed
                    rapidly, both companies have research mRNA vaccination since 2008 and 
                    2010, respectively.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='acc-item' eventKey="3">
            <Accordion.Header className="acc-header">
                    What if I can't afford a vaccination?
                </Accordion.Header>
                <Accordion.Body className='acc-body'>
                    <p>
                    Almost all insurance providers will cover the cost of your COVID-19
                    vaccine. Although federal funding has ended for COVID-19 vaccination, 
                    they are still free to the uninsured if you book through <b>My Turn</b>.
                    </p>
                    <a href="https://myturn.ca.gov/en_US.html" target="_blank">
                    <button type="button" class = "donate-button" href="https://myturn.ca.gov/">
                    My Turn
                    </button>
                    </a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='acc-item' eventKey='4'>
            <Accordion.Header className="acc-header">
                    Where can I get vaccinated?
                </Accordion.Header>
                <Accordion.Body className='acc-body'>
                    <p>
                    Vaccination appointments can be either made through your healthcare
                provider. Alternatively, you can book an appointment through <b>My Turn</b>
              </p>
              <a href="https://myturn.ca.gov/en_US.html" target="_blank">
                <button type="button" class = "donate-button" href="https://myturn.ca.gov/">
                  My Turn
                </button>
              </a>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className='acc-item' eventKey='5'>
            <Accordion.Header className="acc-header">
                    Can you give me more information on vaccines?
                </Accordion.Header>
                <Accordion.Body className='acc-body'>
                    <p>
                    More detailed information including research articles on all aspects of COVID-19 
                can be found on the CDC website.
              </p>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html" target="_blank">
                <button type="button" class = "donate-button" href="https://myturn.ca.gov/">
                  CDC COVID-19 Vaccinations
                </button>
              </a>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}