class Stone {
  constructor(x, y) {
    var options = {
      restitution: 0.5,
      friction: 1.0,
      density: 2,
    };
    this.body = Bodies.rectangle(x, y, 80, 80, options);
    this.width = 80;
    this.height = 80;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("grey");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
