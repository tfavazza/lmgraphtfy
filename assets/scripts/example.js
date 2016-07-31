'use strict';
//
//
//
let Chart = require('../../node_modules/chart.js');
let ctx = document.getElementById("myChart");
let bar = require('./charts/barChart.js');
let scatter = require('./charts/scatterplot.js')

let myChart = new Chart(ctx, scatter.scatterPlot);


module.exports = true;
