$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var answerOne = parseInt($("input:radio[name=answer1]:checked").val());
        var answerTwo = parseInt($("input:radio[name=answer2]:checked").val());
        var answerThree = parseInt($("input:radio[name=answer3]:checked").val());
        var answerFour = parseInt($("input:radio[name=answer4]:checked").val());
        var answerFive = parseInt($("input:radio[name=answer5]:checked").val());
        var answerSix = parseInt($("input:radio[name=answer6]:checked").val());
        var answer = answerOne+ answerTwo + answerThree + answerFour + answerFive + answerSix;

        document.getElementById("results").innerHTML= " Your score is " + answer + " out of 120 ";
    });
});
