'use strict';

let completedBarChart = {
  type: 'bar',
  data: {
    datasets:[{
      labels: [],
      label: 'Bar Chart',
      data: [],
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255,255,255,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
  },
  options: {
      stacked: false, //flip this for stacked bar
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

};


let completedScatterPlot = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Scatter Graph',
      data: [
      ]
    }]
  },
  options: {
    showLines: false, //change this to true for line
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  }
};


let buildBarChart = function(inputs){
  let labels = inputs.credentials.labels.split(",");
  let numbers = inputs.credentials.data.split(",").map(Number);
  completedBarChart.data.labels = labels;
  completedBarChart.data.datasets.data = numbers;
  console.log(completedBarChart);
  return completedBarChart;
};


let buildScatterChart = function(inputs) {
  let xData = inputs.credentials.x.split(",").map(Number);
  let yData = inputs.credentials.y.split(",").map(Number);
  let dataArray = [];
  for(let i=0; i<xData.length; i++){
    dataArray.push({
      x: xData[i],
      y: yData[i]
    });
  }
  completedScatterPlot.data.datasets.data = dataArray;
  console.log(completedScatterPlot);
  return completedScatterPlot;
};

module.exports = {
  buildBarChart,
  buildScatterChart
};


// let xData = [];
// let yData = [];
//
//
// const buildDataSet = function(coordinates) {
//   xData = coordinates.split(',');
//   for(let i=0; i < coordinates.length; i++) {
//     scatterPlot.data.datasets.data[i] = coordinates[i];
//   }
// }
//
//
//
// const buildScatterPlot = function(inputs) {
//
//
//   let scatterPlot = {
//     type: inputs.type,
//     data: {
//       datasets: [{
//         label: 'Dataset',
//         data: []
//       }]
//     },
//     options: {
//       showLines: inputs.showLines, //change this to true for line
//       scales: {
//         xAxes: [{
//           type: `${inputs.type}`,
//           position: 'bottom'
//         }]
//       }
//     }
//   };
//   return scatterPlot;
// };