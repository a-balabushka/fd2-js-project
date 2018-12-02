// Анимация при запуске
$(document).ready(() => {
  $('#container').show(3000);
});


$('.play-button').click(function() {
  $('#button-start').show();
});

// Анимация серых блоков
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
  animationDampers();
  $('#canvas').show();
  $('#button-start').remove();
});

/* --------------------------------------------------------------- */

// проверяет пересечение аргументов
function isColliding(a, b) {
  let result = false;

  const aRight = a.posX + a.size;
  const aBottom = a.posY + a.size;
  const bRight = b.posX + b.size;
  const bBottom = b.posY + b.size;

  if (a.posX <= bRight && aRight >= b.posX && a.posY <= bBottom && aBottom >= b.posY) {
    result = true;
  }
  return result;
}

// функция рандома
function randomDiap(N, M) {
  return Math.floor(Math.random() * (M - N + 1) + N);
}
