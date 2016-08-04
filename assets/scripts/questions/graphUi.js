'use strict';

const app = require('../app.js');
let Chart = require('../../../node_modules/chart.js');


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

module.exports = {
  saveGraphSuccess,
  deleteGraphSuccess,
};
