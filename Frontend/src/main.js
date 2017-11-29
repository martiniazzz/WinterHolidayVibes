$(function () {

    var Countdown = require('../src/Countdown.js');
    var Books = require('../src/Books');

    Countdown.countdown();
    Books.initialiseBooks();

});