var fs = require('fs');
var ejs = require('ejs');

exports.OneBookItem = ejs.compile(fs.readFileSync('./Frontend/templates/OneBookItem.ejs', "utf8"));