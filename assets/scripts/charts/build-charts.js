'use strict';

let completedChart = {
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

let buildBarChart = function(inputs){
  let labels = inputs.credentials.labels.split(",");
  let numbers = inputs.credentials.data.split(",").map(Number);
  completedChart.data.labels = labels;
  completedChart.data.datasets.data = numbers;
  console.log(completedChart);
  return completedChart;
};


module.exports = {
  buildBarChart,
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
