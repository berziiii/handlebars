'use strict';

const displayBooks = function(books){
  let bookListingTemplate = require('../templates/book-listing.handlebars');
  $('.book-content').html(bookListingTemplate(books));
};

const displayTitles = function(books){
  let titleListingTemplate = require('../templates/title-listing.handlebars');
  $('.title-content').html(titleListingTemplate(books));
  $('.title-content').addClass('hide');
};

module.exports = {
  displayBooks,
  displayTitles
};
