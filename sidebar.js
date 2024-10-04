function myFunction() {
  document.getElementById("sidebar-btn").style.visibility = 'hidden';
  document.getElementById("sideclose-btn").style.visibility = 'visible';
}

function myFunction2() {
  document.getElementById("sidebar-btn").style.visibility = 'visible';
  document.getElementById("sideclose-btn").style.visibility = 'hidden';
}

$(document).ready(function(){
  $("#sidebar-btn").click(function(){
    $("#sidebar").toggleClass('visible')
  });

  $("#sideclose-btn").click(function(){
    $("#sidebar").toggleClass('visible')
  });
});
