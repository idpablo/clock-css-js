    setInterval(function () {

        //Variables declaration.
        //Capture Date of System.
        var d = new Date();
        var co = 360 / 60;
        var graus_seconds = (co * d.getSeconds()) + (co * 15);

        //converter seconds in graus 
        //set 15 graus angular 1 second
        $("#ps").css({
            "transform": "rotate(" + graus_seconds + "deg)"
        });

        var co = 360 / 60;
        var graus_seconds = (co * (m = d.getMinutes()) + (co * 15));

        $("#pm").css({
            "transform": "rotate(" + graus_seconds + "deg)"
        });

        var co = 360 / 12;
        var graus_seconds = co * (h = d.getHours()) + (co * 3);

        $("#ph").css({
            "transform": "rotate(" + graus_seconds + "deg)"
        });
    }, 500);
