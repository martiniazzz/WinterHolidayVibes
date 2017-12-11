$(function () {

    var Countdown = require('../src/Countdown.js');
    var Books = require('../src/Books');
    var Recipes = require('../src/Recipe');
    var Films = require('../src/Films');
    var Map = require('../src/Map');
    var Music = require('../src/Music');
    var Challenges = require('../src/Challenge');

    Countdown.countdown();
    Books.initialiseBooks();
    Recipes.initialiseRecipes();
    Films.initialiseFilms();
    Music.initialiseMusic();
    Challenges.initialiseChallenges();

});