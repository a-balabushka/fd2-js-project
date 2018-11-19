'use strict';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const tileSize = 16; // tile size
const mapSize = 26; // number of tiles
// 0: brick, 1: steel, 2: water, 3: tree, 5: blank
const map = [
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
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
];

const bulletsArr = [];
let botTanksArr = [];

/* --------------------------------------------------------------- */

const sprite = new Image();
sprite.onload = drawGame;
sprite.src = 'img/sprites.png';

/* --------------------------------------------------------------- */

class Tank {
  constructor(x, y, speed, spriteY, bot) {
    this.bot = bot;
    this.posX = x;
    this.posY = y;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = 0;
    this.spriteY = spriteY;
    this.size = tileSize * 2;
    this.positionView = 1;
    this.shooting = false;
    // мне не нравится где расположен if, но я не придумал пока более гуманный рабочий способ
    if (this.bot) {
      function botMotion(entity) {
        function randomDiap(N, M) {
          return Math.floor(Math.random() * (M - N + 1) + N);
        }
        const direction = randomDiap(1, 4);
        const timeDirection = randomDiap(1000, 3000);
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

  up() {
    this.speedY = -this.speed;
    this.speedX = 0;
    this.positionView = 1;
  }

  right() {
    this.speedX = this.speed;
    this.speedY = 0;
    this.positionView = 2;
  }

  down() {
    this.speedY = this.speed;
    this.speedX = 0;
    this.positionView = 3;
  }

  left() {
    this.speedX = -this.speed;
    this.speedY = 0;
    this.positionView = 4;
  }

  checkGoingBeyond() {
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
  }

  obstaclesCheck() {
    const curPosY = Math.round(this.posY / tileSize);
    const curPosX = Math.round(this.posX / tileSize);

    // проверка на наличие препятсвия слева
    for (let i = 0; i <= curPosX; i++) {
      const part1 = map[curPosY][i];
      const part2 = map[curPosY + 1][i];

      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posX < (i + 1) * tileSize) {
          this.posX = (i + 1) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия справа
    for (let i = curPosX; i <= map[curPosY].length; i++) {
      const part1 = map[curPosY][i];
      const part2 = map[curPosY + 1][i];
      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posX > (i - 2) * tileSize) {
          this.posX = (i - 2) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия сверху
    for (let i = 0; i <= curPosY; i++) {
      const part1 = map[i][curPosX];
      const part2 = map[i][curPosX + 1];
      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posY < (i + 1) * tileSize) {
          this.posY = (i + 1) * tileSize;
          this.positionView = 1;
        }
      }
    }

    // проверка на наличие препятсвия снизу
    for (let i = curPosY; i < map.length; i++) {
      const part1 = map[i][curPosX];
      const part2 = map[i][curPosX + 1];
      if ((part1 === 0 || part1 === 1) || (part2 === 0 || part2 === 1)) {
        if (this.posY > (i - 2) * tileSize) {
          this.posY = (i - 2) * tileSize;
        }
      }
    }
  }

  shoot() {
    if (!this.shooting) {
      this.shooting = true;
      const bullet = new Bullet(this.posX, this.posY, this.positionView, this.bot);
      bulletsArr.push(bullet);
      setTimeout(() => {
        this.shooting = false;
      }, 2000);
    }
  }

  update() {
    this.posX += this.speedX;
    this.posY += this.speedY;
    this.checkGoingBeyond();
    this.obstaclesCheck();
  }

  draw() {
    switch (this.positionView) {
      case 1:
        context.drawImage(sprite, 210, this.spriteY, 32, 32, this.posX, this.posY, 32, 32);
        break;
      case 2:
        context.drawImage(sprite, 140, this.spriteY, 32, 32, this.posX, this.posY, 32, 32);
        break;
      case 3:
        context.drawImage(sprite, 0, this.spriteY, 32, 32, this.posX, this.posY, 32, 32);
        break;
      case 4:
        context.drawImage(sprite, 70, this.spriteY, 32, 32, this.posX, this.posY, 32, 32);
        break;
    }
    this.update();
  }
}

class Bullet {
  constructor(x, y, positionView, bot) {
    this.bot = bot;
    this.posX = x + 12;
    this.posY = y + 12;
    this.size = 8;
    this.speed = 3;
    this.positionView = positionView;
  }

  checkGoingBeyond() {
    if (this.posY < 0 || this.posY - this.size > canvas.height
      || this.posX < 0 || this.posX - this.size > canvas.width) {
      bulletsArr.splice(bulletsArr.indexOf(this), 1);
    }
  }

  collisionDetection() {
/*    const bposX = Math.round(this.posX / tileSize);
    const bposY = Math.round(this.posY / tileSize);
    for (let i = 0; i <= bposY; i++) {
      const blockY = map[i][bposX];
      if (blockY === 0) {
        if (bposY < (i + 1)) {
          map[i][bposX] = 5;
          bulletsArr.splice(bulletsArr.indexOf(this), 1);
        }
      }
    }*/
  }

  killBot() {
    if (!this.bot) {
      botTanksArr.forEach((bot, i) => {
        for (let j = 0; j < bulletsArr.length; j++) {
          if (isColliding(bulletsArr[j], bot)) {
            botTanksArr.splice(i, 1);
            bulletsArr.splice(j, 1);
          }
        }
      });
    }
  }

  update() {
    switch (this.positionView) {
      case 1:
        this.posY -= this.speed;
        break;
      case 2:
        this.posX += this.speed;
        break;
      case 3:
        this.posY += this.speed;
        break;
      case 4:
        this.posX -= this.speed;
        break;
    }
    this.checkGoingBeyond();
    this.collisionDetection();
    this.killBot();
  }

  draw() {
    context.drawImage(sprite, 45, 80, 8, 8, this.posX, this.posY, 8, 8);
    this.update();
  }
}

/* --------------------------------------------------------------- */

function isWithin(a, b, c) {
  return (a > b && a < c);
}

function isColliding(a, b) {
  let result = false;
  if (isWithin(a.posX + a.size, b.posX, b.posX + b.size) || isWithin(a.posX + a.size, b.posX, b.posX + b.size)) {
    if (isWithin(a.posY + a.size, b.posY, b.posY + b.size) || isWithin(a.posY + a.size, b.posY, b.posY + b.size)) {
      result = true;
    }
  }
  return result;
}

/* --------------------------------------------------------------- */

const userTank = new Tank(144, 384, 1.25, 0, false);
botTanksArr = [new Tank(0, 0, 0.75, 40, true)];

/* --------------------------------------------------------------- */

function generateBotTank() {
  if (botTanksArr.length < 5) {
    if (botTanksArr.length % 2 === 0) {
      botTanksArr.push(new Tank(0, 0, 0.5, 40, 1));
    } else {
      botTanksArr.push(new Tank(384, 0, 0.5, 40, 1));
    }
  }
}

setInterval(generateBotTank, 5000);

/* --------------------------------------------------------------- */

requestAnimationFrame(tick);

function tick() {
  drawGame();
  requestAnimationFrame(tick);
}

/* --------------------------------------------------------------- */

function drawGame() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      switch (map[y][x]) {
        case 0:
          context.drawImage(sprite, 60, 80, 16, 16, x * tileSize, y * tileSize, 16, 16);
          break;
        case 1:
          context.drawImage(sprite, 85, 80, 16, 16, x * tileSize, y * tileSize, 16, 16);
          break;
      }
    }
  }

  userTank.draw();

  for (let i = 0; i < bulletsArr.length; i++) {
    bulletsArr[i].draw();
  }

  for (let i = 0; i < botTanksArr.length; i++) {
    botTanksArr[i].draw();
  }
}

/* --------------------------------------------------------------- */

document.addEventListener('keydown', (EO) => {
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

document.addEventListener('keyup', (EO) => {
  if (EO.keyCode === 38 || EO.keyCode === 40) {
    userTank.speedY = 0;
  }

  if (EO.keyCode === 39 || EO.keyCode === 37) {
    userTank.speedX = 0;
  }
});
