
var result = 0;
var win = 0;
var lost = 0;
var target=0;
var max = 120;
var min = 19;

// Computer generates a random number between 19 and 120
// The random number will display on the Target section
// Each one of the 4 crystals will be assigned computer generated numbers, values between 1-19

    var resetGame = function(){
        result = 0;
        target = Math.floor(Math.random() * (max - min + 1));
        $("#target").html("Target Number: " + target);
    }

        var images = [
            "assets/images/crystal-1.jpg", 
            "assets/images/crystal-2.jpg",
            "assets/images/crystal-3.jpg",
            "assets/images/crystal-4.jpg"
        ];

target = Math.floor(Math.random() * (max - min + 1));
$("#target").html("Target Number: " + target);

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 18) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random,
        "background-image": images;
    });

    
    $(".crystals").append(crystal);
    }
//}

//resetGame ();

$(document).on("click", ".crystal", function () {
    var value = ($(this).attr("data-random"));
    value = parseInt(value);
    result += value;

    if (result === target) {
        wins++;
        resetGame();
    }

    else if (result >= target) {
        lost++;
        resetGame();
    }

    $("#score").html(result);
    $("#loss").html(lost);
    $("#wins").html(win);
});

