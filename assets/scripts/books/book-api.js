'use strict';

const bookUi = require('./books-ui.js');
const app = require('../app.js');

let getBooks = function(){
  return $.ajax({
    url: app.host + "/books",
    // method: 'GET',
    // dataType: 'json'
  }).done(bookUi.displayBooks, bookUi.displayTitles);
};

// let getBookTitles = function(){
//   return $.ajax({
//     url: app.host + "/books",
//     // method: 'GET',
//     // dataType: 'json'
//   }).done(bookUi.titleBooks);
// };

module.exports = {
  getBooks
};
