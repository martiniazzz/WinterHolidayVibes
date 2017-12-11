var Templates = require('../src/Templates');

var musicCol = $('#music-col');


var musicData = require('../../Backend/data/MusicData');
var MUSIC = [];

var counter;

function initialiseMusic() {
    musicCol.html("");


    MUSIC = musicData.musicInfo;
    function showMusic(music) {
        var html_code = Templates.OneMusicItem({music: music});
        var $node = $(html_code);
            musicCol.append($node);
        counter++;
    }
    MUSIC.forEach(showMusic);
}

exports.initialiseMusic = initialiseMusic();