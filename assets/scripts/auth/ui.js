'use strict';

const app = require('../app.js');
const api = require('./api.js');
//const example = require('../example.js');

const anySuccess = () => {
  $('.error').hide();
};

const changePasswordSuccess = () => {
  anySuccess();
  $('#password-old, #password-new').val("");
};

const signOutSuccess = () => {
  app.user = null;
  $('#sign-out-button').hide();
  $('#sign-in-button').show();
};

const failure = (error) => {
  $('.error').show();
  $('.error').text("I'm sorry, something went wrong.");
  console.error(error);
};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(signOutSuccess)
  .fail(failure);
};


const signInSuccess = (data) => {
  app.user = data.user;
  $('#message').html('');
  $('.bd-sign-up-sign-in').modal('hide');
  $('#sign-out-button').show();
  $('#sign-in-button').hide();
  $('#sign-out').on('click', onSignOut);
};

const signUpSuccess = () => {
  $('#signin-email').val($('#signup-email').val());
  $('#signin-password').val($('#signup-password').val());
  $('#sign-in').submit();
  $('#signin-email, #signup-email, #signin-password, #signup-password, #signup_passwordconf').val('');
};


module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
};
