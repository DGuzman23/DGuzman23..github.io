
$( document ).ready(function(){
    $(".button-collapse").sideNav();
  $('select').material_select();
  $('.parallax').parallax();
  $('#textarea1').val('New Text');
  $('.modal').modal();
$('#textarea1').trigger('autoresize');
  $('.carousel.carousel-slider').carousel({height : 800});
  $('.slider').slider({ 
    height : 750, // default - height : 400
    interval: 3500, // default - interval: 6000
    indicators: false
});
})