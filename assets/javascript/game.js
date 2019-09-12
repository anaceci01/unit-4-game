
var result = 0;
var win = 0;
var lost = 0;
var target = 0;
var max = 120;
var min = 19;

// Computer generates a random number between 19 and 120
// The random number will display on the Target section
// Each one of the 4 crystals will be assigned computer generated numbers, values between 1-19

var resetGame = function () {
    result = 0;
    target = Math.floor(Math.random() * (max - min + 1));
    $("#target").html("Target Number: " + target);
}

var imageArray = [
    "http://33.media.tumblr.com/tumblr_m0lgiu6OYP1qh3v5mo1_500.jpg",
    "http://40.media.tumblr.com/90e88e0ade888ac9c5e532e8fbf1d0b9/tumblr_ncddxs3FZG1sqjjogo1_500.jpg",
    "https://thumbs.dreamstime.com/b/abstract-rainbow-holographic-foil-texture-trendy-magic-background-pastel-colours-131503756.jpg",
    "https://data.whicdn.com/images/316261532/large.jpg"
];
var imageIndex = 0;

target = Math.floor(Math.random() * (max - min + 1));
$("#target").html("Target Number: " + target);

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 18) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": "crystal",
        "data-random": random,
    });

    crystal.css({
        "background-image":"url('" + imageArray[i] + "')"
    });

    $(".crystals").append(crystal);
}



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

