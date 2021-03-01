    setInterval(function () {

        //Variables declaration.
        //Capture Date of System.
        var d = new Date();
        var co = 360 / 60;
        var graus_seconds = (co * d.getSeconds()) + (co * 15);

        //converter seconds in graus 
        //set 15 graus angular 1 second
        $(".pointer-seconds").css({
            "transform": "rotate(" + graus_seconds + "deg)"
        });

        var co = 360 / 60;
        var graus_seconds = (co * (m = d.getMinutes()) + (co * 15));

        $(".pointer-minutes").css({
            "transform": "rotate(" + graus_seconds + "deg)"
        });

        var co = 360 / 12;
        var graus_seconds = co * (h = d.getHours()) + (co * 3);

        $(".pointer-hours").css({
            "transform": "rotate(" + graus_seconds + "deg)"
        });
    }, 500);
