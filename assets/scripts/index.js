'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
let authEvents = require('./auth/events.js');
let questionEvents = require('./questions/events.js');

$(() => {
  authEvents.addHandlers();
  questionEvents.addHandlers();
});
