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
    const [currentRValue, setCurrentRValue] = useState(null);
  
    //get R array
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

    useEffect( () => {
      const loadRValue = async () => {
      try {
          const response = await fetch('/rvalue');
          const rvalueresponse = await response.json();
          setCurrentRValue(rvalueresponse[rvalueresponse.length-1].RVal);
      } catch (error) {
          console.log('Error loading R value:', error.message);
          setCurrentRValue(null);
      }
  }

      loadRValue();
  },[]);
  
    return (
      <div className="container_RInfo">

        <div className ="item_RInfo">
          <LineChart data={jsonData}/>
        </div>
        <div className="item_RInfo">
          <h2>R<sub>0</sub> Values</h2>
                  <p className="answer">An R<sub>0</sub> value is a number that represents 
                  the number of people that a single infected person can be expected to transmit that disease to.
                  This single number provides an effective way of monitoring an infectious disease.
                  </p>
                  <p className="answer">
                    If the R Value is larger than 1, on average every infected person
                    infects more than 1 other person. This can lead to an outbreak if preventative
                    measures are not used. We generally want the R Value to be less than 1.
                  </p>
                  <p className="answer">
                    Last Reported R<sub>0</sub> Value: {currentRValue}
                  </p>
        </div>
      </div>
    );
}; 

export default RInfo;