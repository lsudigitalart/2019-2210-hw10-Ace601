class Boid{ 

    constructor(){
  
        this.position = createVector(width / 2.2, height / 2);
        this.velocity = p5.Vector.random2D();
      this.velocity.setMag(random(2,90));
        this.acceleration = createVector();
    this.maxForce = 0.2;
      this.maxSpeed = 4
    
    
    }
align(boids){
let perceptionRadius = 100
let steering = createVector();
let total = 0;
for(let other of boids){

let d = dist(this.position.x, this. position.y, other.position.x, other.position.y);

if(other != this && d < perceptionRadius){
steering.add(other.velocity);
total++
}

}
if(total > 0){
steering.div(total);
steering.setMag(this.speed);
  steering.sub(this.velocity);
steering.limit(this.maxForce);
}
  
  return steering;
  
  

}
    eye(boids){

let alignment = this.align(boids);
this.acceleration=alignment;

}
update(){
this.position.add(this.velocity);
this.velocity.add(this.acceleration);



}
        display(){
//    strokeWeight(16);
//             stroke(255)
//      point(this.position.x,this.position.y);   
    image(eyeImage,this.position.x,this.position.y)
   

}}



