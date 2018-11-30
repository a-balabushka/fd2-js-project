/*Анимация при запуске*/
$(document).ready(() => {
  $('#container').show(3000);
});


/*Анимация серых блоков*/
$('.play-button').click(function() {
  animationDampers();
});

function animationDampers(num) {
  $('#play').append('<div></div>');
  $('#play div').last().css({position: 'absolute', backgroundColor: 'black', height: '616px', width: '616px', zIndex: '2'});

  setTimeout(() => {
    $('#play div').last().remove();}, 2500);


  if (num === undefined) {
    num = 1;
  }
  $('.damper').slideDown(1000).delay(1500).slideUp(1000);
  $('#level_num').text(`LEVEL ${num}`)
}

$('#button-start').click(() => {
  startGame();
  $('#button-start').remove();
})