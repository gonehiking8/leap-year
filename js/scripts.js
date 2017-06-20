//back-end
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return "Yay!";
  } else {
  return "Sad Panda...";
  }
};



//front-end
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);

  event.preventDefault();
  });
});
