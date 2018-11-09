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

var sprite = new Image();
sprite.onload = drawGame;
sprite.src = 'img/sprites.png';

function TTank(x, y, speed, spriteY, bot) {
  this.posX = x;
  this.posY = y;
  this.speedX = 0;
  this.speedY = 0;
  this.width = tileSize * 2;
  this.height = tileSize * 2;
  // снаряд
  this.posShellX = this.posX + 12;
  this.posShellY = this.posY + 12;
  this.speedShellX = 0;
  this.speedShellY = 0;
  this.widthShell = tileSize / 2;
  this.heightShell = tileSize / 2;
  this.up = function () {
    this.speedY = -speed;
    this.speedShellY = -4;
  };
  this.right = function () {
    this.speedX = speed;
    this.speedShellX = 4;
  };
  this.down = function () {
    this.speedY = speed;
    this.speedShellY = 4;
  };
  this.left = function () {
    this.speedX = -speed;
    this.speedShellX = -4;
  };
  this.shift = function () {
    this.posX += this.speedX;
    this.posY += this.speedY;
  };
  this.directionUp = function () {
    context.drawImage(sprite, 210, spriteY, 32, 32, this.posX, this.posY, 32, 32);
  };
  /*  directionRight: function () {
    context.drawImage(sprite, 140, 0, 32, 32, this.posX, this.posY, 32, 32);
  },
  directionDown: function () {
    context.drawImage(sprite, 0, 0, 32, 32, this.posX, this.posY, 32, 32);
  },
  directionLeft: function () {
    context.drawImage(sprite, 70, 0, 32, 32, this.posX, this.posY, 32, 32);
  }, */
  this.outTank = function () { // выход за границу
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
  };
  this.checkObstacles = function () {
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
  };
  this.shot = function () {
    context.drawImage(sprite, 45, 80, 8, 8, this.posShellX, this.posShellY, 8, 8);
    this.posShellX +=  this.speedShellX;
    this.posShellY +=  this.speedShellY;
    console.log('Fire!');
  };
  this.createTank = function () {
    this.shift();
    this.directionUp();
    this.checkObstacles();
    this.outTank();
  };
  if (bot) {
    function botMotion(entity) {
      function randomDiap(N, M) {
        return Math.floor(Math.random() * (M - N + 1) + N);
      }
      var direction = randomDiap(1, 4);
      var timeDirection = randomDiap(1000, 3000);
      switch (direction) {
      case 1:
        entity.up();
        break;
      case 2:
        entity.right();
        break;
      case 3:
        entity.down();
        break;
      case 4:
        entity.left();
        break;
      }
      setTimeout(botMotion, timeDirection, entity);
    }
    botMotion(this);
  }
}

/* --------------------------------------------------------------- */

var botTanksArr = [new TTank(0, 0, 0.5, 40, 1)];
var userTank = new TTank(144, 384, 1, 0, 0);

setInterval(generateBotTank, 5000);

function generateBotTank() {
  if (botTanksArr.length < 5) {
    if (botTanksArr.length % 2 === 0) {
      botTanksArr.push(new TTank(0, 0, 0.5, 40, 1));
    } else {
      botTanksArr.push(new TTank(384, 0, 0.5, 40, 1));
    }
  }
}

function createBotTank(bot) {
  bot.createTank();
}

/* --------------------------------------------------------------- */

requestAnimationFrame(tick);

function tick() {
  drawGame();
  userTank.createTank();
  botTanksArr.forEach(createBotTank);
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

document.addEventListener('keydown', function (EO) {
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

document.addEventListener('keyup', function (EO) {
  if (EO.keyCode === 38 || EO.keyCode === 40) {
    userTank.speedY = 0;
  }

  if (EO.keyCode === 39 || EO.keyCode === 37) {
    userTank.speedX = 0;
  }
});
