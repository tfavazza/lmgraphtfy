'use strict';

const app = require('../app.js');
let Chart = require('../../../node_modules/chart.js');
let ctx = document.getElementById("myChart");


let graphArray;

//take each object in graphArray and iterate through it on button click


const saveGraphSuccess = (data) => {
  app.user.graph = data.graph;
  console.log(app.user.graph);
  $('#edit-container').show();
};

const deleteGraphSuccess = ()=> {
  $("#delete-message").html("Graph Deleted");
  $("#delete-message").show();
setTimeout(function() { $("#delete-message").hide(); }, 5000);
  $('#chart-container').hide();
};

const displayAllGraphsSuccess = (data) => {
  $('#graph-navigators, #chart-container').show();
  graphArray = data.graphs;
  let counter = 0;
  console.log(graphArray[1].graphJSON);
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
  deleteGraphSuccess,
  displayAllGraphsSuccess
};
