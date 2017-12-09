var Templates = require('../src/Templates');

var filmsCol1 = $('#films-col-1');
var filmsCol2 = $('#films-col-2');
var filmsCol3 = $('#films-col-3');

var filmsData = require('../../Backend/data/FilmsData');
var FILMS = [];

var counter;

function initialiseFilms() {
    filmsCol1.html("");
    filmsCol2.html("");
    filmsCol3.html("");

    counter = 1;
    FILMS = filmsData.film_info;
    function showFilms(film) {
        var html_code = Templates.OneFilmItem({film: film});
        var $node = $(html_code);
        if(counter%3==1)
            filmsCol1.append($node);
        else if(counter%3==2)
            filmsCol2.append($node);
        else
            filmsCol3.append($node);
        counter++;
    }
    FILMS.forEach(showFilms);
}

exports.initialiseFilms= initialiseFilms();