'use strict';

let buildBarChart = function(inputs){

type: 'bar',
data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
