'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const app = require('../app.js')
const api = require('./api');
const ui = require('./ui');
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

const onSaveGraph = function(event) {
  event.preventDefault();
  api.saveGraph(app.chartData)
  .done(ui.saveGraphSuccess)
  .fail(ui.SaveGraphFailure);
};

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
      break;
  }
  return charts;
};


const onGraphCreation = function(event) {
  event.preventDefault();
  let inputs = getFormFields(event.target);
  let chartData = graphOptionToCreate(inputs);
  $('#chart-container').show();
  let myChart = new Chart(ctx, chartData);
  myChart.destroy();
  myChart.update(ctx, chartData);
  app.chartData = chartData;
};




const onButtonClick = function(event) {
  event.preventDefault();
  let lookup = event.target.id;
  $('#app').html(questions(category[lookup]));
  $('.question').on('click', onButtonClick);
};






const addHandlers = () => {
  $('#questionOneYes').on('click', onButtonClick);
  $('#app').on('submit', onGraphCreation);
  $('#save-graph').on('click', onSaveGraph);
};
//
module.exports = {
  addHandlers,
};
