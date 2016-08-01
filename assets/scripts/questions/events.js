'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

//const api = require('./api');
//const ui = require('./ui');
//const index = require('../index.js');
const category = require('./category.js');
const questions = require('../../styles/templates/questions.handlebars');



const onButtonClick = function(event) {
  event.preventDefault();
  let lookup = event.target.id;
  console.log(lookup);
  $('#app').html(questions(category[lookup]));
  //$('#chart-container').show();
};



const addHandlers = () => {
  $('#clickable').on('click', onButtonClick);
};
//
module.exports = {
  addHandlers,
};
