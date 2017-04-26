$(document).ready(function() {
    $("nav").mouseover(function() {
      $(this).css("border-radius", "10px"); 
    });
    $("nav").mouseout(function() {
      $(this).css("border-radius", "50%"); 
    });
});