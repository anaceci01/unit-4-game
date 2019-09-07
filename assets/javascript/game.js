
var result = 0;
var win= 0;
var lost= 0;
var target;
var max = 120;
var min = 19;

// Computer generates a random number between 19 and 120
// The random number will display on the Target section

target = Math.floor(Math.random() * (max - min + 1)) + min;

$("#target").html("Target Number: " + target);

// Each one of the 4 crystals will be assigned computer generated numbers, values between 1-19
for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 18) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);
}

$(".crystal").on("click", function () {
   var value = ($(this).attr("data-random"));
   value = parseInt(value);
   result += value;
    
    $("#score").html(result); {
        result += random;
    }
    $("#loss").html(lost);



 $("#wins").html(win);
if (result === target) {
    wins++;
}

else if (result >= target) {
    lost++;
}





});







// The value give is going to be reset each time the game starts


