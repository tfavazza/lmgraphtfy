'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

//const api = require('./api');
//const ui = require('./ui');
//const index = require('../index.js');
const category = require('../questions/category.js');


const onQuestionYes = function(event) {
  event.preventDefault();
  console.log("yo");
  $('#questions').html("Hello?");
  $('#chart-container').show();
};



const addHandlers = () => {
  $('#question-1-yes').on('click', onQuestionYes);
};
//
module.exports = {
  addHandlers,
};