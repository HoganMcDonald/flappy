let bird, pipes;

let counter = 0;
let rate = 80;

let score = 0;

function setup() {
  createCanvas(1000, 700);
  bird = new Bird();
  pipes = [];
}

function draw() {
  background(20);
  score++;

  // bird
  bird.update();
  if (bird.y === height || bird.y === 0) {
    resetGame();
  }
  bird.render();

  // pipes
  counter++;
  if (counter === rate) {
    counter = 0;
    pipes.push(new Pipe);
  }
  for (var i = pipes.length -1; i >= 0; i--) {
    // delete first pipe when off screen
    if (i === 0) {
      if (pipes[i].x + pipes[i].width === 0) {
        pipes.shift();
      }
    }

    pipes[i].update();
    //check for collision
    if (checkCollision(bird, pipes[i])) {
      pipes[i].color = 'red';
      resetGame();
      return;
    }
    pipes[i].render();
  }
}

function keyPressed() {
  if (key = ' ') {
    bird.flap();
  }
}

function checkCollision(bird, pipe) {
  // console.log('checked', pipe.x - bird.x);
  //check x alignment && check y alignment
  if (Math.abs(pipe.x - bird.x) < bird.size && (bird.y < pipe.gapStart || bird.y + bird.size > pipe.gapStart + pipe.gap)) {
    // console.log('passed');
    return true;
  } else {
    return false;
  }
}

function resetGame() {
  bird.y = height/2;
  bird.speed = 0;
  bird.acceleration = 0.6;
  counter = 0;
  score = 0;
  for (var i = 0; i < pipes.length; i++) {
    pipes.pop();
  }
}
