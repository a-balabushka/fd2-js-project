'use strict';
// canvas colliding matrix
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

var currentSecond = 0;
var frameCount = 0;
var framesLastSecond = 0;

var botTanksArr = [];

/* --------------------------------------------------------------- */

var sprite = new Image();
sprite.onload = drawGame;
sprite.src = 'img/sprites.png';

/* --------------------------------------------------------------- */
var shooting = false;

var bullet = {
  posX: 0,
  posY: 0,
  size: 8,
  speed: 1.75,
  out: function () {
    if (bullet.posY < 0 || bullet.posY - bullet.size > canvas.height) {
      shooting = false;
    }

    if (bullet.posX < 0 || bullet.posX - bullet.size > canvas.width) {
      shooting = false;
    }
  },
  collision: function () {
    var bposX = Math.round(bullet.posX / 16);
    var bposY = Math.round(bullet.posY / 16);

    for (var i = 0; i <= bposY; i++) {
      var blockY = map[i][bposX];
      if (blockY === 0) {
        if (bposY < (i + 1)) {
          map[i][bposX] = 5;
          shooting = false;
        }
      }
    }
  },
  drawBullet: function () {
    context.drawImage(sprite, 45, 80, 8, 8, this.posX, this.posY, 8, 8);
    this.out();
    this.collision();
  }
};


function TTank(x, y, speed, spriteY, bot) {
  this.posX = x;
  this.posY = y;
  this.speedX = 0;
  this.speedY = 0;
  this.size = tileSize * 2;
  this.positionView = 1;
  this.up = function () {
    this.speedY = -speed;
    this.speedX = 0;
    this.positionView = 1;
  };
  this.right = function () {
    this.speedX = speed;
    this.speedY = 0;
    this.positionView = 2;
  };
  this.down = function () {
    this.speedY = speed;
    this.speedX = 0;
    this.positionView = 3;
  };
  this.left = function () {
    this.speedX = -speed;
    this.speedY = 0;
    this.positionView = 4;
  };
  this.shift = function () {
    this.posX += this.speedX;
    this.posY += this.speedY;
  };
  this.imageView = function () {
    switch (this.positionView) {
    case 1:
      context.drawImage(sprite, 210, spriteY, 32, 32, this.posX, this.posY, 32, 32);
      break;
    case 2:
      context.drawImage(sprite, 140, spriteY, 32, 32, this.posX, this.posY, 32, 32);
      break;
    case 3:
      context.drawImage(sprite, 0, spriteY, 32, 32, this.posX, this.posY, 32, 32);
      break;
    case 4:
      context.drawImage(sprite, 70, spriteY, 32, 32, this.posX, this.posY, 32, 32);
      break;
    }
  };
  this.outTank = function () { // выход за границу
    if (this.posY + this.size > canvas.height) {
      this.posY = canvas.height - this.size;
    }
    if (this.posY < 0) {
      this.posY = 0;
    }
    if (this.posX + this.size > canvas.width) {
      this.posX = canvas.width - this.size;
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
          this.positionView = 1;
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
  this.shoot = function () {
    if (!shooting) {
      shooting = true;
      bullet.posX = this.posX + 12;
      bullet.posY = this.posY + 12;
    }
  };
  this.createTank = function () {
    this.shift();
    this.imageView();
    this.checkObstacles();
    this.outTank();
    if (shooting) {
      bullet.posY -= bullet.speed;
      bullet.drawBullet();
    }
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

botTanksArr = [new TTank(0, 0, 0.75, 40, 1)];
var userTank = new TTank(144, 384, 1.25, 0, 0);

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

function isWithin(a, b, c) {
  return (a > b && a < c);
}

function isColliding(a, b) {
  var result = false;
  if (isWithin(a.posX + a.size, b.posX, b.posX + b.size) || isWithin(a.posX + a.size, b.posX, b.posX + b.size)) {
    if (isWithin(a.posY + a.size, b.posY, b.posY + b.size) || isWithin(a.posY + a.size, b.posY, b.posY + b.size)) {
      result = true;
    }
  }
  return result;
}

/* --------------------------------------------------------------- */

requestAnimationFrame(tick);

function tick() {
  drawGame();

  requestAnimationFrame(tick);
}

function drawGame() {
  var sec = Math.floor(Date.now() / 1000);
  if (sec !== currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }

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

  userTank.createTank();
  botTanksArr.forEach(createBotTank);
  context.fillStyle = '#ff0000';
  context.font = 'italic bold 20px Arial';
  context.fillText('FPS: ' + framesLastSecond, 10, 20);

  /* ---------------------------------------- */

  if (shooting) {
    botTanksArr.forEach(function (bot, i) {
      if (isColliding(bullet, bot)) {
        botTanksArr.splice(i, 1);
        shooting = false;
      }
    });
  }
  /* ---------------------------------------- */
}

/* --------------------------------------------------------------- */

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
    userTank.shoot();
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
