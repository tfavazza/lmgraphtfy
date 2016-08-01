'use strict';

const app = require('../app.js');
//const api = require('./api.js');
//const example = require('../example.js');

const anySuccess = () => {
  $('.error').hide();
};

const success = (data) => {
  anySuccess();
  if (data) {
    //console.log(data);
  } else {
    //console.log('Success');
  }
};

const changePasswordSuccess = () => {
  anySuccess();
  $('#password-old, #password-new').val("");
};

const failure = (error) => {
  $('.error').show();
  $('.error').text("I'm sorry, something went wrong.");
  console.error(error);
};


const signInSuccess = () => {
  console.log("Signed in!");
};

const signUpSuccess = () => {
};


const signOutSuccess = () => {
};




module.exports = {
  success,
  failure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
};
