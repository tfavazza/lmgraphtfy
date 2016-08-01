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
  console.log("HOLY HELL YOU DID IT");
};


const onButtonClick = function(event) {
  console.log("yo");
  event.preventDefault();
  let lookup = event.target.id;
  console.log(lookup);
  $('#app').html(questions(category[lookup]));
  $('.question').on('click', onButtonClick);
  $('.graph-creation').on('click', onGraphCreation);
  //$('#chart-container').show();
};




const addHandlers = () => {
  $('#questionOneYes').on('click', onButtonClick);
};
//
module.exports = {
  addHandlers,
};
