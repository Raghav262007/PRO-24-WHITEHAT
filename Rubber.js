class Rubber {
  constructor() {
    var options = {
      restitution: 0.3,
      friction: 5.0,
      density: 1,
    };
    this.body = Bodies.circle(300, 300, 50, options);
    this.radius = 50;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("pink");
    ellipse(0, 0, this.radius);
    pop();
  }
}
