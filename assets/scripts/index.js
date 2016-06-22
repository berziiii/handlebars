'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

const authEvents = require('./auth/events.js');

// const bookApi = require('./books/book-api.js');
$('#all-books').on('click', function () {
  $('.title-content').addClass('hide');
  $('.book-content').removeClass('hide');
});
$('#book-titles').on('click', function () {
  $('.book-content').addClass('hide');
  $('.title-content').removeClass('hide');
});
// On document ready
$(() => {
  authEvents.addHandlers();
  // bookApi.getBooks();
  $('#nav-sign-in').on('click', function () {
    $('#open-sign-in').modal('show');
  });
  $('#nav-sign-up').on('click', function () {
    $('#open-sign-up').modal('show');
  });
});
