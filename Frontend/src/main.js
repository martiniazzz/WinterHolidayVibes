$(function () {

    var Countdown = require('../src/Countdown.js');
    var Books = require('../src/Books');
    var Recipes = require('../src/Recipe');
    var Films = require('../src/Films');
    var Map = require('../src/Map');

    Countdown.countdown();
    Books.initialiseBooks();
    Recipes.initialiseRecipes();
    Films.initialiseFilms();

});