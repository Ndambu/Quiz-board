$(document).ready(function() {
  $("button").click(function(){
    var firstQuestion = parseInt($("input:radio[name=answer]:checked")).val();
    var secondQuestion = parseInt($("input:radio[name=answer1]:checked")).val();
    var thirdQuestion = parseInt($("input:radio[name=answer2]:checked")).val();
    var fourthQuestion = parseInt($("input:radio[name=answer3]:checked")).val();
    var fifthQuestion = parseInt($("input:radio[name=answer4]:checked")).val();
  })
