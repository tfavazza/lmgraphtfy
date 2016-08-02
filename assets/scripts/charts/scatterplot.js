'use strict';

//scatter and line charts are the same, with
// showLines set to false for scatter

let scatterPlot = {
  type: 'line',
  data: {
    datasets: [{
      label: 'Dataset',
      data: [
        {x: -10, y: 0},
        {x: 0, y: 10},
        {x: 10, y: 5},
        {x: 6,y: 1},
        {x: 4,y: 3}
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

module.exports = {
  scatterPlot,
};
