$(document).ready(function){

    setInterval(function(){

        var d = new Date();
        var co = 360/60;
        var graus_seconds = co * d.getSeconds() + (co + 15);

        $(".pointer-seconds").css({
            "transform":"rotate(" +graus_seconds+ "deg)"
        });

        var co = 360 / 60;
        var graus_seconds = co * (m = d.getMinutes()) + (co * 15);

        $(".pointer-minutes").css({
            "transform": "rotate(" +graus_seconds+"deg)"
        });

        var co = 360 / 12;
        var graus_seconds = co * (h = d.getHours()) + (co * 3);

        $(".pointer-hours").css({
            "transform": "rotate(" +graus_seconds+"deg)"
        });
    }, 500); //
});