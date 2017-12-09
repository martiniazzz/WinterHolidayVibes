var Templates = require('../src/Templates');

var mapData = require('../../Backend/data/Pins');
var PINS = [];

function initialiseMap(){

    var html_element = document.getElementById("googleMap");
    var mapProp = {
        center:	new	google.maps.LatLng(50.4546600,30.5238000),
        zoom: 11
    };
    var map	= new google.maps.Map(html_element,mapProp);

    PINS = mapData.pins_info;
    function showPins(pin) {
        var html_code = Templates.OnePinItem({pin: pin});
        var point =	new	google.maps.LatLng(pin.coordinatesX,pin.coordinatesY);
        var info = new google.maps.InfoWindow({
            content: html_code
        });
        var marker = new google.maps.Marker({
            position: point,
            title: pin.name
        });
        marker.addListener('mouseover', function() {
            info.open(map, marker);
        });
        marker.addListener('mouseout', function() {
            info.close(map, marker);
        });
        marker.setMap(map);
        marker.setIcon("images/pin.png");
    }

    PINS.forEach(showPins);

}

google.maps.event.addDomListener(window,'load',initialiseMap);
