
function countdown(){
    var countDownDate = new Date("Jan 1, 2018 00:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#days-n").text(days);
        if(hours>9){
            $("#hours-n").text(hours);
        }
        else{
            $("#hours-n").text('0'+hours);
        }
        if(minutes>9){
            $("#minutes-n").text(minutes);
        }
        else{
            $("#minutes-n").text('0'+minutes);
        }if(seconds>9){
            $("#seconds-n").text(seconds);
        }
        else{
            $("#seconds-n").text('0'+seconds);
        }
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("count-inner").innerHTML = "HAPPY NEW YEAR";
        }
    }, 1000);
}

exports.countdown = countdown;
