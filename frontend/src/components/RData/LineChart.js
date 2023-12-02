import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Extracting Date and RVal from the JSON data
    const dates = data.map(entry => entry.Date);
    const rValues = data.map(entry => entry.RVal);

    // Chart configuration
    const chartConfig = {
      labels: dates,
      datasets: [
        {
          //label: 'R Values',
          data: rValues,
          borderWidth: 2,
          pointRadius: 4,
          fill: false,
          borderColor: 'rgba(173, 216, 230, 1)', // LightBlue
          backgroundColor: 'rgba(173, 216, 230, 0.2)', // LightBlue with transparency
          pointBackgroundColor: 'rgba(0, 0, 50, 1)', // SteelBlue
          pointBorderColor: 'rgba(0,0,50,1)',
          pointHoverBackgroundColor: '#fff', // White on hover
          pointHoverBorderColor: 'rgba(173, 216, 230, 1)', // LightBlue on hover
          pointStyle: 'triangle',
        },
      ],
    };

    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                display: false,
                //position: "top"
            },
            title: {
                display: true,
                text: "30 Day R Value Data",
                padding: {
                  top: 10,
                  bottom: 10,
                },
                font: {
                  size: 24,
                },
            }
        },
        scales: {
            y: {
                suggestedMin: 0.9,
                suggestedMax: 1.1,
            }
        },
        maintainAspectRatio: false,
        height: 600,
        width: 800,
    })

    setChartData(chartConfig);
  }, [data]);

  return (
    <div style={ {width: '800px', height: '600px'}}>
      {chartData && <Line data={chartData} options = {chartOptions}/>}
    </div>
  );
};

export default LineChart;