import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import LineChart from '../../components/RData/LineChart.js';
import React, {useState, useEffect} from 'react';
import './RInfo.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const RInfo = () => {
    const [jsonData, setJsonData] = useState([]);
  
    useEffect(() => {
      // Fetch your JSON data here and set it to the state
      const fetchData = async () => {
        try {
          const response = await fetch('/rvalue');
          const data = await response.json();
          setJsonData(data);
        } catch (error) {
          console.error('Error fetching JSON data:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="container_RInfo">

        <div className ="item_RInfo">
          <LineChart data={jsonData}/>
        </div>
        {/*
        <div className="item_RInfo">
          <h2>R Values</h2>
          <ul className="accordion">
            <li>
              <input type="checkbox" name="accordion" id="first"/>
              <label for="first">What is an R Value?</label>
              <div className="content">
                  <p className="answer">An R or R<sub>0</sub> value is a number that represents 
                  the number of people that a single infected person can be expected to transmit that disease to.
                  </p>
              </div>
            </li>
            <li>
              <input type="checkbox" name="accordion" id="second"/>
              <label for="second">What should I know about R Values?</label>
              <div className="content">
                  <p className="answer">
                    If the R Value is larger than 1, on average every infected person
                    infects more than 1 other person. This can lead to an outbreak if preventative
                    measures are not used. We generally want the R Value to be less than 1.
                  </p>
              </div>
            </li>
            <li>
              <input type="checkbox" name="accordion" id="third"/>
              <label for="third">Where can I learn more about R0 Values?</label>
              <div className="content">
                  <p className="answer">
                    Learn more here!
                </p>
              </div>
            </li>
          </ul>
        </div>
      */}
      </div>
    );
}; 

export default RInfo;