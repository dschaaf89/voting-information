$(document).ready(function() {
  $("#ageInput").submit(function(event) {
    const userAge = parseInt($("#age1").val());
    event.preventDefault();
    console.log(userAge);
  
  if ( userAge >= 18) {
    $('#voting').show();
  } else {
    $('#under-18').show();
  }
});
});