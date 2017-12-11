var fs = require('fs');
var ejs = require('ejs');

exports.OneBookItem = ejs.compile(fs.readFileSync('./Frontend/templates/OneBookItem.ejs', "utf8"));
exports.OneRecipeItem = ejs.compile(fs.readFileSync('./Frontend/templates/OneRecipeItem.ejs', "utf8"));
exports.OneFilmItem = ejs.compile(fs.readFileSync('./Frontend/templates/OneFilmItem.ejs', "utf8"));
exports.OnePinItem = ejs.compile(fs.readFileSync('./Frontend/templates/OnePinItem.ejs', "utf8"));
exports.OneMusicItem = ejs.compile(fs.readFileSync('./Frontend/templates/OneMusicItem.ejs', "utf8"));
exports.OneChallengeItem = ejs.compile(fs.readFileSync('./Frontend/templates/OneChallengeItem.ejs', "utf8"));