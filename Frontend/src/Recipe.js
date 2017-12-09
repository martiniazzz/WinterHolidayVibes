var Templates = require('../src/Templates');

var recipesCol1 = $('#recipes-col-1');
var recipesCol2 = $('#recipes-col-2');
var recipesCol3 = $('#recipes-col-3');

var recipesData = require('../../Backend/data/RecipesData');
var RECIPES = [];

var counter;

function initialiseRecipes() {
    recipesCol1.html("");
    recipesCol2.html("");
    recipesCol3.html("");

    counter = 1;
    RECIPES = recipesData.recipesInfo;
    function showRecipes(recipe) {
        var html_code = Templates.OneRecipeItem({recipe: recipe});
        var $node = $(html_code);
        if(counter%3==1)
            recipesCol1.append($node);
        else if(counter%3==2)
            recipesCol2.append($node);
        else
            recipesCol3.append($node);
        counter++;
    }
    RECIPES.forEach(showRecipes);
}

exports.initialiseRecipes = initialiseRecipes();