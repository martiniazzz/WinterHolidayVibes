var Templates = require('../src/Templates');

var booksCol1 = $('#books-col-1');
var booksCol2 = $('#books-col-2');
var booksCol3 = $('#books-col-3');

var booksData = require('../../Backend/data/BooksData');
var BOOKS = [];

var counter;

function initialiseBooks() {
    booksCol1.html("");
    booksCol2.html("");
    booksCol3.html("");

    counter = 1;
    BOOKS = booksData.booksInfo;
    function showBooks(book) {
        var html_code = Templates.OneBookItem({book: book});
        var $node = $(html_code);
        if(counter%3==1)
            booksCol1.append($node);
        else if(counter%3==2)
            booksCol2.append($node);
        else
            booksCol3.append($node);
        counter++;
    }
    BOOKS.forEach(showBooks);
}

exports.initialiseBooks = initialiseBooks();