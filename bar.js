class Bar{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      fill("gray")
      stroke(0);
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
}