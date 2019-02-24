//
$(document).ready(function() {
    $("#questions").submit(function(event) {
        event.preventDefault();
        var answerOne = parseInt($("[name=answer1]:checked").val());
        var answerTwo = parseInt($("[name=answer2]:checked").val());
        var answerThree = parseInt($("[name=answer3]:checked").val());
        var answerFour = parseInt($("[name=answer4]:checked").val());
        var answerFive = parseInt($("[name=answer5]:checked").val());
        var answer = parseInt(answerOne+ answerTwo + answerThree + answerFour + answerFive);
        if (answer > 60) {
         $("#results").text("Your score is: " + answer);
        }else{
            $("#results").text( "Your score is: " + answer + " Your Score is below Pass Mark");
        }
    });
});
