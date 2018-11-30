const sound = {};

function soundLoader(name) {
  sound[name] = new Audio();
  sound[name].src = `sound/${name}.ogg`
}

soundLoader('stage_start');
soundLoader('bullet_hit_1');
soundLoader('bullet_hit_2');
soundLoader('bullet_shot');
soundLoader('explosion_1');
soundLoader('explosion_2');
soundLoader('game_over');
