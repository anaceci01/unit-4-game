
var result;
var win;
var lost;
var target;
var max;
var min;


for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

    $(".crystals").append(crystal);
}
        
// Computer generates a random number between 19 and 120
// The random number will display on the Target section






// Each one of the 4 crystals will be assigned computer generated numbers, values between 1-19
// The value give is going to be reset each time the game starts


