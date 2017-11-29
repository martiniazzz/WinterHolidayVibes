
exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'Головна'
    });
};

exports.filmsPage = function(req, res) {
    res.render('filmsPage', {
        pageTitle: 'Фільми'
    });
};

exports.booksPage = function(req, res) {
    res.render('booksPage', {
        pageTitle: 'Книги'
    });
};

exports.musicPage = function(req, res) {
    res.render('musicPage', {
        pageTitle: 'Музика'
    });
};

exports.cookPage = function(req, res) {
    res.render('recipesPage', {
        pageTitle: 'Рецепти'
    });
};

exports.calendarPage = function(req, res) {
    res.render('calendarPage', {
        pageTitle: 'Календар'
    });
};