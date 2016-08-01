'use strict';
//
//
//
let Chart = require('../../node_modules/chart.js');
let ctx = document.getElementById("myChart");
let bar = require('./charts/barChart.js');
let scatter = require('./charts/scatterplot.js');

Chart.defaults.global.defaultFontColor = '#FFF';
Chart.defaults.global.defaultFontSize = 22;

let myChart = new Chart(ctx, bar.barChart);


module.exports = myChart;
