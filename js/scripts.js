$(document).ready(function() {
  $("#ageInput").submit(function(event) {
    const userAge = parseInt($("#userAge").val());
    event.preventDefault();
    console.log(userAge);
  });
  if ( userAge >= 18) {
    $('#voting').show();
  } else {
    $('#under-18').show();
  }

});