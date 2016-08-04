'use strict';

const app = require('../app.js');

const saveGraph = (data) => {
  if(app.user === undefined){
    $('#message').html("You need to sign in to save");
  }
  return $.ajax({
    url: app.host + '/graphs/',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
    contentType: 'application/json',
    dataType: 'json'
  });

};

const displayAllGraphs = () => {
  return $.ajax({
    url: app.host + '/graphs/',
    method: 'GET',
    contentType: 'application/json'
  });
};

const displayUsersGraphs = () => {
  return $.ajax({
    url: app.host + '/graphs/' + app.user.graphs, //is this right?
    method: 'GET',
    contentType: 'application/json'
  });
};

const deleteGraph = () => {
  return $.ajax({
    url: app.host + '/graphs/' + app.user.graph.id,
    method: "DELETE",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const editGraph = (data) => {
  return $.ajax({
    url: app.host + '/graphs/' + app.user.graph.id,
    method: "PATCH",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    contentType: 'application/json',
    data: data,
    dataType: 'json'
  });
};


module.exports = {
  saveGraph,
  deleteGraph,
  editGraph,
  displayAllGraphs,
  displayUsersGraphs
};
