'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');
const graphApi = require('./graphApi');
const graphUi = require('./graphUi');
const category = require('./category.js');
const questions = require('../../styles/templates/questions.handlebars');
const buildChart = require('../charts/build-charts.js');
let Chart = require('../../../node_modules/chart.js');
let ctx = document.getElementById("myChart");

//same problem that buildChartX had here. if these are declared in
//bracked form they're not applied properly

Chart.defaults.global.defaultFontColor = '#FFF';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultColor = '#FFF';
Chart.defaults.global.elements.point.backgroundColor = '#28cbee';
Chart.defaults.global.elements.point.radius = 7;
Chart.defaults.global.responsive = true;
let chartDataToSend;

const graphOptionToCreate = function(inputs) {
  let charts;
  switch(inputs.credentials.type) {
    case 'bar':
    case 'column':
     charts = buildChart.buildBarChart(inputs);
     chartDataToSend = JSON.stringify(charts);
     break;
    case 'line':
      charts = buildChart.buildLineChart(inputs);
      chartDataToSend = JSON.stringify(charts);
      break;
    case 'scatter':
      charts = buildChart.buildScatterChart(inputs);
      chartDataToSend = JSON.stringify(charts);
      break;
    case 'bubble':
      charts = buildChart.buildBubbleChart(inputs);
      chartDataToSend = JSON.stringify(charts);
      break;
    case 'stackedBar':
      charts = buildChart.buildStackedBarChart(inputs);
      chartDataToSend = JSON.stringify(charts);
      break;
    case 'stackedArea':
      charts= buildChart.buildStackedAreaChart(inputs);
      chartDataToSend = JSON.stringify(charts);
      break;
    default:
      $("#error").html("Something went wrong, please start over");
      break;
  }
  return charts;
};

const onGraphCreation = function(event) {
  event.preventDefault();
  let inputs = getFormFields(event.target);
  //chartDataToSend = inputs;
  let chartData = graphOptionToCreate(inputs);
  $('#chart-container, #save-container').show();
  let myChart = new Chart(ctx, chartData);
  myChart.destroy();
  myChart.update(ctx, chartData);
};

const onButtonClick = function(event) {
  event.preventDefault();
  let lookup = event.target.id;
  $('#app').html(questions(category[lookup]));
  $("[data-toggle='tooltip']").tooltip({
    placement: 'right',

  });
  $('.question').on('click', onButtonClick);
  $('#questionOneYes').on('click', function(){
  $('#chart-container, #graph-navigators, #save-container').hide();
  });
};

const onSaveGraph = function(event) {
  event.preventDefault();
  let chartDataFormatted = {
    "graph": {
      "graphJSON": chartDataToSend
    }
  };
  chartDataFormatted = JSON.stringify(chartDataFormatted);
  graphApi.saveGraph(chartDataFormatted)
  .done(graphUi.saveGraphSuccess)
  .fail(graphUi.saveGraphFailure);
};

const onEditGraph = function(event) {
  event.preventDefault();
  let chartDataFormatted = {
    "graph": {
      "graphJSON": chartDataToSend
    }
  };
  graphApi.editGraph(chartDataFormatted)
  .done(graphUi.editGraphSuccess)
  .fail(graphUi.ediGraphFailure);
};

const onDeleteGraph = function(event) {
  event.preventDefault();
  graphApi.deleteGraph()
  .done(graphUi.deleteGraphSuccess)
  .fail(graphUi.deleteGraphFailure);
};

const onDisplayAllGraphs = function(event) {
  event.preventDefault();
  graphApi.displayAllGraphs()
  .done(graphUi.displayAllGraphsSuccess)
  .fail(graphUi.displayAllGraphsFailure);
};

const onDisplayUsersGraphs = function(event) {
  event.preventDefault();
  graphApi.displayUsersGraphs()
  .done(graphUi.displayUsersGraphsSuccess)
  .fail(graphUi.displayUsersGraphsFailure);
};

const addHandlers = () => {
  $('#questionOneYes').on('click', onButtonClick);
  $('#app').on('submit', onGraphCreation);
  $('#save-graph').on('click', onSaveGraph);
  $('#all-graphs').on('click', onDisplayAllGraphs);
  $('#my-graphs').on('click', onDisplayUsersGraphs);
  $('#edit-graph').on('click', onEditGraph);
  $('#delete-graph').on('click', onDeleteGraph);
  $('#questionOneNo').on('click', graphUi.noGraph);
};
//
module.exports = {
  addHandlers,
};
