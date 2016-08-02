'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

//const api = require('./api');
//const ui = require('./ui');
//const index = require('../index.js');
const category = require('./category.js');
const questions = require('../../styles/templates/questions.handlebars');

const onGraphCreation = function(event) {
  event.preventDefault();
  console.log(event.target);
  let maybe = getFormFields(event.target);
  console.log(maybe);
  console.log("HOLY HELL YOU DID IT");
  $('#chart-container').show();

};


const onButtonClick = function(event) {
  console.log("yo");
  event.preventDefault();
  let lookup = event.target.id;
  $('#app').html(questions(category[lookup]));
  $('.question').on('click', onButtonClick);
  //$('#graph-creation').parents('form').on('submit', onGraphCreation);
  //
};




const addHandlers = () => {
  $('#questionOneYes').on('click', onButtonClick);
  $('#app').on('submit', onGraphCreation);
};
//
module.exports = {
  addHandlers,
};
