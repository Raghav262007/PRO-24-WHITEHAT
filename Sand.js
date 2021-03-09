class Sand {
  constructor() {
    var options = {
      restitution: 1.3,
      friction: 5.0,
      density: 1,
    };
    this.body = Bodies.circle(500, 500, 10, options);
    this.radius = 10;
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
