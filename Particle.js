class Particle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius=10;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill(this.color)
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius*2);
        pop();
      }
}