class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':1,
            'friction':5,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius*2-15, options);
        this.angle = 0;
        Matter.Body.setAngle(this.body,0);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        angle = 0;
        colorMode(HSB,100)
        fill(random(0,100),100,100);
        stroke(0);
        ellipse(pos.x,pos.y,this.radius);

      }
}