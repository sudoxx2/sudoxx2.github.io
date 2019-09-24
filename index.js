$(document).ready(function(){
  $("#h1_section1").fadeIn(2500);
  
  $("#h2_role").fadeIn(2500);
  $("#see_proj_btn").fadeIn(2500);
  
});

$(window).on('resize', function () {
  $('.class1').toggleClass('class2', $(window).width() < 768);
  
  $('#size').text($(window).width())
}).trigger('resize')

let modal = document.getElementById("id01");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function(){
  if ($(window).width() < 480) {
    $('#card1').removeClass('flip-card-inner');
} else {
    $('#card1').addClass('flip-card-inner');
}
});

// document.querySelector(".nav-btn").addEventListener("click",function() {
//   if( document.getElementById("see_proj_btn").style.display == "none") {
//     document.getElementById("see_proj_btn").style.display = "inline-block";
//   } else {
//     document.getElementById("see_proj_btn").style.display = "none";
//   }
// })