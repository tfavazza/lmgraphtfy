'use strict';

const app = require('../app.js');
let Chart = require('../../../node_modules/chart.js');
let ctx = document.getElementById("myChart");

let graphArray;

const saveGraphSuccess = (data) => {
  app.user.graph = data.graph;
  $('#edit-container').show();
};

const saveGraphFailure = () =>{
  $("#message").html("You need to sign in first");
};

const deleteGraphSuccess = ()=> {
  $("#delete-message").html("Graph Deleted");
  $("#delete-message").show();
  setTimeout(function() { $("#delete-message").hide(); }, 5000);
  $('#chart-container').hide();
};

const noGraph = () =>{
  $("#delete-message").html('<br><center><div>Fine. Have a random cat gif instead.</div><img src="http://thecatapi.com/api/images/get?format=src&type=gif"></center>');
  $("#delete-message").show();
  setTimeout(function() { $("#delete-message").hide(); }, 5000);
  $('#chart-container').hide();
};

const displayAllGraphsSuccess = (data) => {
  $('#graph-navigators, #chart-container').show();
  $('#save-container, #edit-container').hide();
  graphArray = data.graphs;
  let counter = 0;
  $('#next-graph').on('click', function(){
    if(counter < graphArray.length-1){
      counter++;}
      else {
        counter = 0;
      }
    let parsed = JSON.parse(graphArray[counter].graphJSON);
    let myChart = new Chart(ctx, parsed);
    myChart.destroy();
    myChart.update(ctx, parsed);
  });
  $('#prev-graph').on('click', function(){
    if(counter > 0){
      counter--;}
      else {
        counter = graphArray.length -1;
      }
    let parsed = JSON.parse(graphArray[counter].graphJSON);
    let myChart = new Chart(ctx, parsed);
    myChart.destroy();
    myChart.update(ctx, parsed);
  });
};

module.exports = {
  saveGraphSuccess,
  saveGraphFailure,
  deleteGraphSuccess,
  displayAllGraphsSuccess,
  noGraph
};
