var bolinha;

function setup() {
  createCanvas(1300,660);
bolinha = createSprite(500,300,100,100)
}

function draw() {
  background(30);
drawSprites();
if (keyIsDown(65)) {
bolinha.x -= 5
}
if (keyIsDown(68)) {
bolinha.x += 5
}
 if (keyIsDown(87)) {
bolinha.y -= 5
}
if (keyIsDown(83)) {
bolinha.y += 5
}

      
}




