'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

//const api = require('./api');
//const ui = require('./ui');
//const index = require('../index.js');
const category = require('./category.js');
const questions = require('../../styles/templates/questions.handlebars');
const buildChart = require('../charts/build-charts.js');
let Chart = require('../../../node_modules/chart.js');
let ctx = document.getElementById("myChart");

Chart.defaults.global.defaultFontColor = '#FFF';
Chart.defaults.global.defaultFontSize = 16;
//Chart.defaults.global.elements.line.backgroundColor;
Chart.defaults.global.defaultColor = '#FFF';
Chart.defaults.global.elements.point.backgroundColor = '#28cbee';
Chart.defaults.global.elements.point.radius = 7;


const graphOptionToCreate = function(inputs) {
  let charts;
  switch(inputs.credentials.type) {
    case 'bar':
    case 'column':
    console.log("making a bar chart!");
     charts = buildChart.buildBarChart(inputs);
     break;
    case 'line':
      console.log("Line charts?");
      charts = buildChart.buildLineChart(inputs);
      break;
    case 'scatter':
      charts = buildChart.buildScatterChart(inputs);
      break;
    case 'bubble':
      charts = buildChart.buildBubbleChart(inputs);
      break;
    default:
      console.log('frown');
  }
  return charts;
};


const onGraphCreation = function(event) {
  event.preventDefault();
  let inputs = getFormFields(event.target);
  //console.log(inputs);
  let chartData = graphOptionToCreate(inputs);
  
  //console.log(chartData);
  $('#chart-container').show();
  let myChart = new Chart(ctx, chartData);
  console.log("made a chart?");
  console.log(myChart);
  myChart.destroy();
  myChart.update(ctx, chartData);
};




const onButtonClick = function(event) {
  event.preventDefault();
  let lookup = event.target.id;
  $('#app').html(questions(category[lookup]));
  $('.question').on('click', onButtonClick);
  //$('#graph-creation').parents('form').on('submit', onGraphCreation);
  //
};




const addHandlers = () => {
  $('#questionOneYes').on('click', onButtonClick);
  $('#app').on('submit', onGraphCreation);
};
//
module.exports = {
  addHandlers,
};
