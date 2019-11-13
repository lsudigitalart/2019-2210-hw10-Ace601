
let offset = 0;
let eyeImage;
let eye = [];


function preload(){
eyeImage = loadImage("mishkaball.png");
eyeImage2 = loadImage("mishkaball.png");
}
function setup(){
createCanvas(1378,700);
for(let i = 0; i < 100; i++){
//let x = random(width);
//let y = random(height);
eye.push(new Boid ());}
//(x, y, random(5), speed, 2)
}

function draw(){

background(165, 255, 160);
tint(255, 127); // Display at half opacity
  //image(eyeImage2, offset, 0);

eyeImage2.resize(1000,800)
image(eyeImage2,209,-20);

noTint();
for (let boid of eye){
boid.eye(eye);
  boid.display();
boid.update();
eyeImage.resize(100, 70);


}




}