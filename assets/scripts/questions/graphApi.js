'use strict';

const app = require('../app.js');

const saveGraph = (data) => {
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
      'Content-Type': 'application/json',
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};


module.exports = {
  saveGraph,
  deleteGraph,
  editGraph
};
