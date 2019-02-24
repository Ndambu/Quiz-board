var answers = [".push()","||","Back-end","Wells","jQuery"];
var pointPerCorrect = 10;


function percentage (score) {
return "Your score is " + parseInt((score / 50) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=answer]:checked").val());
      var answerTwo = ($("input[type=radio][name=answer1]:checked").val());
      var answerThree = ($("input[type=radio][name=answer2]:checked").val());
      var answerFour = ($("input[type=radio][name=answer3]:checked").val());
      var answerFive = ($("input[type=radio][name=answer4]:checked").val());

      if (answers0 === undefined || answers1 === undefined || answers2 === undefined || answers3 === undefined || answers4 === undefined); {
  $('#questionsIncomplete').text('Please Complete questions Before Submitting');
  $('#questionsIncomplete').fadeOut(10000);
} else {
         if (answer1 === answers[0]) {
    score += pointPerCorrect;
  }
         if (answer2 === answers[1]) {
    score += pointPerCorrect;
  }
         if (answer3 === answers[2]) {
    score += pointPerCorrect;
  }
         if (answer4 === answers[3]) {
           score += pointPerCorrect;
 }
         if (answer5 === answers[4]) {
           score += pointPerCorrect;
 }


        $("input[type=radio][name=questionOneChoice]:checked").prop('checked', false);
        $("input[type=radio][name=questionTwoChoice]:checked").prop('checked', false);
        $("input[type=radio][name=questionThreeChoice]:checked").prop('checked', false);
        $("input[type=radio][name=questionFourChoice]:checked").prop('checked', false);
        $("input[type=radio][name=questionFiveChoice]:checked").prop('checked', false);
        $('#questionsIncomplete').text('');
        $('#result').text(percentage(score));
}
          event.preventDefault();
 });
});
