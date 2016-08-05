'use strict';

const app = require('../app.js');
//const api = require('./api.js');
//const example = require('../example.js');

const anySuccess = () => {
  $('.error').hide();
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


const signInSuccess = (data) => {
  app.user = data.user;
  $('#message').html('');
  $('.bd-sign-up-sign-in').modal('hide');
};

const signUpSuccess = () => {
  $('#signin-email').val($('#signup-email').val());
  $('#signin-password').val($('#signup-password').val());
  $('#sign-in').submit();
  $('#signin-email, #signup-email, #signin-password, #signup-password, #signup_passwordconf').val('');
};

const signOutSuccess = () => {
};


module.exports = {
  failure,
  signInSuccess,
  signOutSuccess,
  signUpSuccess,
  changePasswordSuccess,
};
