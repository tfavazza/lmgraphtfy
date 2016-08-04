'use strict';

const app = require('../app.js');

  const saveGraphSuccess = (data) => {
    app.user.graph = data.graph;
    console.log(app.user.graph);
    $('#edit-container').show();
  };


module.exports = {
  saveGraphSuccess,
};
