const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const mapSize = 28; // длина массива карт
const tileSize = 22; // размер одной ячейки

let map; // текущая карта
let tankAmount; // количество танков на поле

let userTank; // пользовательский танк
let botTanksArr = []; // массив ботов на карте
const bulletsArr = []; // массив пуль на карте

let idCount = 0; // id для ботов
let score = 0; // счет пользователя
let level = 1; // номер уровня

let gameOver = false; // значение конца игры

/* --------------------------------------------------------------- */

const sprite = new Image();
sprite.onload = drawGame;
sprite.src = 'img/sprites.png';

const gameOver1 = new Image();
gameOver1.onload = drawGame;
gameOver1.src = 'img/game_over.png';

/* --------------------------------------------------------------- */

class Tank {
  constructor(x, y, speed, spriteY, bot, id) {
    this.id = id;
    this.bot = bot;
    this.posX = x;
    this.posY = y;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = 0;
    this.spriteX = 0;
    this.spriteY = spriteY;
    this.counter = 0;
    this.size = tileSize * 2;
    this.positionView = 0;
    this.shooting = false;

    if (this.bot) {
      this.randomBotMotion();
    }
  }

  randomBotMotion() {
    function botMotion(entity) {
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
        default:
          entity.shoot();
      }
      setTimeout(botMotion, timeDirection, entity);
    }

    botMotion(this);
  }

  up() {
    this.speedY = -this.speed;
    this.speedX = 0;
    this.positionView = 0;
  }

  right() {
    this.speedX = this.speed;
    this.speedY = 0;
    this.positionView = 1;
  }

  down() {
    this.speedY = this.speed;
    this.speedX = 0;
    this.positionView = 2;
  }

  left() {
    this.speedX = -this.speed;
    this.speedY = 0;
    this.positionView = 3;
  }

  obstaclesCheck() {
    const curPosY = Math.round(this.posY / tileSize);
    const curPosX = Math.round(this.posX / tileSize);

    // проверка на наличие препятсвия слева
    for (let i = 0; i <= curPosX; i++) {
      const part1 = map[curPosY][i];
      const part2 = map[curPosY + 1][i];

      if ((part1 >= 0 && part1 <= 2) || (part2 >= 0 && part2 <= 2)) {
        if (this.posX < (i + 1) * tileSize) {
          this.posX = (i + 1) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия справа
    for (let i = curPosX; i <= map[curPosY].length; i++) {
      const part1 = map[curPosY][i];
      const part2 = map[curPosY + 1][i];
      if ((part1 >= 0 && part1 <= 2) || (part2 >= 0 && part2 <= 2)) {
        if (this.posX > (i - 2) * tileSize) {
          this.posX = (i - 2) * tileSize;
        }
      }
    }

    // проверка на наличие препятсвия сверху
    for (let i = 0; i <= curPosY; i++) {
      const part1 = map[i][curPosX];
      const part2 = map[i][curPosX + 1];
      if ((part1 >= 0 && part1 <= 2) || (part2 >= 0 && part2 <= 2)) {
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
      if ((part1 >= 0 && part1 <= 2) || (part2 >= 0 && part2 <= 2)) {
        if (this.posY > (i - 2) * tileSize) {
          this.posY = (i - 2) * tileSize;
        }
      }
    }
  }

  deathUser() {
    botTanksArr.forEach((bot) => {
      if (isColliding(bot, userTank)) {
        gameOver = true;
      }
    });
  }

  shoot() {
    if (!this.shooting) {
      this.shooting = true;
      const bullet = new Bullet(this.posX, this.posY, this.positionView, this.bot, this.id);
      bulletsArr.push(bullet);

      if (!this.bot) {
        sound.bullet_shot.play();
      }

      setTimeout(() => {
        this.shooting = false;
      }, 1500);
    }
  }

  update() {
    this.counter++;
    this.posX += this.speedX;
    this.posY += this.speedY;
    this.obstaclesCheck();
    this.deathUser();
  }

  animation() {
    let s = this.bot ? 4 : 3;
    if (this.speedX !== 0 || this.speedY !== 0) {
      this.spriteX = Math.floor(this.counter / s % 2) * 35 + (70 * this.positionView);
    } else {
      this.spriteX = 70 * this.positionView;
    }
  }

  draw() {
    this.animation();
    context.drawImage(sprite, this.spriteX, this.spriteY, 32, 32, this.posX, this.posY, this.size, this.size);
    this.update();
  }
}

class Bullet {
  constructor(x, y, positionView, bot, id) {
    this.id = id;
    this.bot = bot;
    this.posX = x + 17;
    this.posY = y + 17;
    this.size = 10;
    this.speed = 5;
    this.positionView = positionView;
    this.counter = 0;
  }

  collisionDetection() {
    const bposX = Math.round(this.posX / tileSize);
    const bposY = Math.round(this.posY / tileSize);

    for (let i = 0; i <= bposY; i++) {
      const blockY = map[i][bposX];
      if (blockY === 0) {
        if (bposY < (i + 1)) {
          map[i][bposX] = 5;
          bulletsArr.splice(bulletsArr.indexOf(this), 1);
          this.animationHit();

          if (!this.bot){
            sound.bullet_hit_2.play();
          }

        }
      }

      if (blockY === 1 || blockY === 2) {
        if (bposY < (i + 1)) {
          bulletsArr.splice(bulletsArr.indexOf(this), 1);

          if (!this.bot) {
            sound.bullet_hit_1.play();
          }

          this.animationHit();

        }
      }
    }
  }

  killBot() {
    if (!this.bot) {
      botTanksArr.forEach((bot, i) => {
        for (let j = 0; j < bulletsArr.length; j++) {
          if (isColliding(bulletsArr[j], bot)) {
            botTanksArr[i].bot = false;
            botTanksArr.splice(i, 1);
            bulletsArr.splice(j, 1);
            score += 100;
            sound.explosion_1.play();
          }
        }
      });
    }
  }

  deathUser() {
    if (this.bot) {
      for (let j = 0; j < bulletsArr.length; j++) {
        if (isColliding(bulletsArr[j], userTank)) {
          gameOver = true;
          bulletsArr.splice(j, 1);
        }
      }
    }
  }

  destroyEagle() {
    for (let j = 0; j < bulletsArr.length; j++) {
      if (isColliding(bulletsArr[j], eagle)) {
        sound.explosion_2.play();
        bulletsArr.splice(j, 1);
        gameOver = true;
      }
    }
  }

  animationHit() {
    for (let i = 0; i < 3; i++) {
      context.drawImage(sprite, (Math.floor(this.counter / 60 % 3)) * i * 35, 100, 32, 32, this.posX - 12, this.posY - 12, this.size, this.size);
    }
  }

  update() {
    switch (this.positionView) {
      case 0:
        this.posY -= this.speed;
        break;
      case 1:
        this.posX += this.speed;
        break;
      case 2:
        this.posY += this.speed;
        break;
      case 3:
        this.posX -= this.speed;
        break;
    }
    this.collisionDetection();
    this.killBot();
    this.deathUser();
    this.destroyEagle();
  }

  draw() {
    context.drawImage(sprite, this.positionView * 15, 120, 8, 8, this.posX, this.posY, this.size, this.size);
    this.update();
  }
}

const eagle = {
  posX: 286,
  posY: 550,
  size: tileSize * 2,
  draw() {
    context.drawImage(sprite, 200, 120, 32, 32, this.posX, this.posY, this.size, this.size);
  },
};

/* --------------------------------------------------------------- */

init();

/* --------------------------------------------------------------- */

function init() {
  map = Array.from(levels.level1);
  userTank = new Tank(220, 550, 2, 0, false, 100);
  botTanksArr = [];
  tankAmount = 5;
}

/* --------------------------------------------------------------- */

function startGame() {
  sound.stage_start.play();
  window.requestAnimationFrame(tick);
  setInterval(generateBotTank, 2500);
}

function tick() {
  if (!gameOver) {
    drawGame();
    window.requestAnimationFrame(tick);
  } else {
    endGame();
  }
}

function generateBotTank() {
  if ((tankAmount !== 0) && (botTanksArr.length < 5)) {
    const x = randomDiap(0, 2);
    idCount += 1;
    switch (x) {
      case 0:
        botTanksArr.push(new Tank(22, 22, 1, 40, true, idCount));
        break;
      case 1:
        botTanksArr.push(new Tank(290, 22, 1, 40, true, idCount));
        break;
      case 2:
        botTanksArr.push(new Tank(550, 22, 1, 40, true, idCount));
        break;
    }
    tankAmount--;
  }
}

/* --------------------------------------------------------------- */

function drawGame() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  userTank.draw();

  for (let i = 0; i < bulletsArr.length; i++) {
    bulletsArr[i].draw();
  }

  for (let i = 0; i < botTanksArr.length; i++) {
    botTanksArr[i].draw();
  }

  eagle.draw();

  drawMap();
}

function drawMap() {
  if (tankAmount === 0 && botTanksArr.length === 0) {
    if (level < 4) {
      level++;
    }

    userTank.posX = 220;
    userTank.posY = 550;
    userTank.positionView = 1;
    nextLevel(level);
  }

  for (let y = 0; y < mapSize; y++) {
    for (let x = 0; x < mapSize; x++) {
      switch (map[y][x]) {
        case 0:
          context.drawImage(sprite, 75, 120, 16, 16, x * tileSize, y * tileSize, tileSize, tileSize);
          break;
        case 1:
          context.drawImage(sprite, 100, 120, 16, 16, x * tileSize, y * tileSize, tileSize, tileSize);
          break;
        case 2:
          context.fillStyle = 'dimgrey';
          context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
          break;
        case 3:
          context.drawImage(sprite, 150, 120, 16, 16, x * tileSize, y * tileSize, tileSize, tileSize);
          break;
      }
    }
  }
}

function nextLevel(num) {
  const levelKey = `level${num}`;

  animationDampers(num);

  for (let key in levels) {
    if (levelKey == key) {
      map = Array.from(levels[key]);
      tankAmount = 5;

    }
    if (num === 4) {
      tankAmount = Infinity;
    }

  }
}

function endGame() {
  const x = (canvas.width - 248) / 2;
  const y = (canvas.height - 360) / 2;
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(gameOver1, x, y);

  context.textAlign = 'center';
  context.fillStyle = 'white';
  context.font = '18px prstart';
  context.fillText(`SCORE: ${score}`, canvas.width / 2, canvas.height / 1.5);

  context.font = '12px prstart';
  context.fillText(`REFRESH TO REPEAT`, canvas.width / 2, canvas.height / 1.05);
  sound.game_over.play();
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
