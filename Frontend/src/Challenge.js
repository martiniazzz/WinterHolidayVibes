var Templates = require('../src/Templates');

var chCol1 = $('#col-ch-1');
var chCol2 = $('#col-ch-2');
var chCol3 = $('#col-ch-3');
var chCol4 = $('#col-ch-4');

var challengesData = require('../../Backend/data/Challenges');
var CHALLENGES = [];

var counter;

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.7 + ')';
}

function initialiseChallenges() {
    chCol1.html("");
    chCol2.html("");
    chCol3.html("");
    chCol4.html("");

    counter = 1;
    CHALLENGES = challengesData.challenges_info;
    function showChallenges(challenge) {
        var html_code = Templates.OneChallengeItem({challenge: challenge});
        var $node = $(html_code);
        $node.css("background", random_rgba());
        if(counter%4==1)
            chCol1.append($node);
        else if(counter%4==2)
            chCol2.append($node);
        else if(counter%4==3)
            chCol3.append($node);
        else
            chCol4.append($node);
        counter++;
    }
    CHALLENGES.forEach(showChallenges);
}

exports.initialiseChallenges = initialiseChallenges();