$(document).ready(function() {
  console.log('lol')

  $('#carousel-example-generic').carousel({
       interval: 5000
   });
});

$('.flip').click(function(){
        $(this).find('.card').toggleClass('flipped');

    });
