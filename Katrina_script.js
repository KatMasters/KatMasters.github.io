$(document).ready(setup);

var user_text = $(':input').val();

function whenClicked(){
  var user_text = $(':input').val();
  $('#comments').append(user_text);
}
function setup(){
  $('.button').click(whenClicked);
}
