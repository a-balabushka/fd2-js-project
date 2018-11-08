'use strict';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var tileSize = 16; // tile size
var mapSize = 26; // number of tiles
// 0: brick, 1: steel, 2: water, 3: tree, 5: blank
var map = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0],
  [1, 1, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 1, 1],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
];
var shells = [];

var sprite = new Image();
sprite.onload = drawGame;
sprite.src = 'img/sprites.png';

var userTank = {
  posX: 144,
  posY: 384,
  speedX: 0,
  speedY: 0,
  width: tileSize * 2,
  height: tileSize * 2,
  // снаряд
  posShellX: this.posX + 12,
  posShellY: this.posY + 12,
  speedShellX: 0,
  speedShellY: 0,
  widthShell: tileSize / 2,
  heightShell: tileSize / 2,
  up: function () {
    this.speedY = -1;
    this.speedShellY = -4;
  },
  right: function () {
    this.speedX = 1;
    this.speedShellX = 4;
  },
  down: function () {
    this.speedY = 1;
    this.speedShellY = 4;
  },
  left: function () {
    this.speedX = -1;
    this.speedShellX = -4;
  },
  shift: function () {
    this.posX += this.speedX;
    this.posY += this.speedY;
  },
  directionUp: function () {
    context.drawImage(sprite, 210, 0, 32, 32, this.posX, this.posY, 32, 32);
  },
  /*  directionRight: function () {
    context.drawImage(sprite, 140, 0, 32, 32, this.posX, this.posY, 32, 32);
  },
  directionDown: function () {
    context.drawImage(sprite, 0, 0, 32, 32, this.posX, this.posY, 32, 32);
  },
  directionLeft: function () {
    context.drawImage(sprite, 70, 0, 32, 32, this.posX, this.posY, 32, 32);
  }, */
  outTank: function () { // выход за границу
    if (this.posY + this.height > canvas.height) {
      this.posY = canvas.height - this.height;
    }
    if (this.posY < 0) {
      this.posY = 0;
    }
    if (this.posX + this.width > canvas.width) {
      this.posX = canvas.width - this.width;
    }
    if (this.posX < 0) {
      this.posX = 0;
    }
  },
  checkObstacles: function () {
    var curPosY = Math.round(this.posY / tileSize);
    var curPosX = Math.round(this.posX / tileSize);

    // проверка на наличие препятсвия слева
    for (var i = 0; i <= curPosX; i++) {
      var part1 = map[curPosY][i];
      var part2 = map[curPosY + 1][i];

      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posX < (i + 1) * tileSize) {
          this.posX = (i + 1) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия справа
    for (i = curPosX; i <= map[curPosY].length; i++) {
      part1 = map[curPosY][i];
      part2 = map[curPosY + 1][i];
      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posX > (i - 2) * tileSize) {
          this.posX = (i - 2) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия сверху
    for (i = 0; i <= curPosY; i++) {
      part1 = map[i][curPosX];
      part2 = map[i][curPosX + 1];
      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posY < (i + 1) * tileSize) {
          this.posY = (i + 1) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия снизу
    for (i = curPosY; i < map.length; i++) {
      part1 = map[i][curPosX];
      part2 = map[i][curPosX + 1];
      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posY > (i - 2) * tileSize) {
          this.posY = (i - 2) * tileSize;
        }
      }
    }
  },
  shot: function () {
    context.drawImage(sprite, 45, 80, 8, 8, this.posShellX, this.posShellY, 8, 8);
    this.posShellX +=  this.speedShellX;
    this.posShellY +=  this.speedShellY;
    console.log('Fire!');
  },

  createTank: function () {
    userTank.shift();
    userTank.directionUp();
    userTank.checkObstacles();
    userTank.outTank();
  }
};

/* --------------------------------------------------------------- */

requestAnimationFrame(tick);

function tick() {
  drawGame();
  userTank.createTank();
  requestAnimationFrame(tick);
}

function drawGame() {
  for (var y = 0; y < mapSize; y++) {
    for (var x = 0; x < mapSize; x++) {
      switch (map[y][x]) {
      case 0:
        context.drawImage(sprite, 60, 80, 16, 16, x * tileSize, y * tileSize, 16, 16);
        break;
      case 1:
        context.drawImage(sprite, 85, 80, 16, 16, x * tileSize, y * tileSize, 16, 16);
        break;
      default:
        context.fillStyle = 'black';
        context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

window.addEventListener('keydown', function (EO) {
  switch (EO.keyCode) {
  case 38:
    userTank.up();
    break;
  case 39:
    userTank.right();
    break;
  case 40:
    userTank.down();
    break;
  case 37:
    userTank.left();
    break;
  case 32:
    userTank.shot();

    break;
  }
});

window.addEventListener('keyup', function (EO) {
  if (EO.keyCode === 38 || EO.keyCode === 40) {
    userTank.speedY = 0;
  }

  if (EO.keyCode === 39 || EO.keyCode === 37) {
    userTank.speedX = 0;
  }
});
