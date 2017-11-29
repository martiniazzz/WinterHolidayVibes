
var express = require('express');
var path = require('path');
var morgan = require('morgan');

function configureEndpoints(app) {
    var pages = require('./pages');

    app.get('/', pages.mainPage);
    app.get('/films.html', pages.filmsPage);
    app.get('/books.html', pages.booksPage);
    app.get('/music.html', pages.musicPage);
    app.get('/recipes.html', pages.cookPage);
    app.get('/calendar.html', pages.calendarPage);

    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    var app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(morgan('dev'));

    configureEndpoints(app);

    app.listen(port, function () {
        console.log('Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;