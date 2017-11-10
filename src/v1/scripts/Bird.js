class Bird {
  constructor() {
    this.x = 190;
    this.y = height/2;
    this.size = 30;
    this.color = 230;

    this.speed = 0;
    this.acceleration = 0.6;
  }

  flap() {
    this.speed += -15;
  }

  render() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.speed += this.acceleration;
    this.speed *= 0.95;
    this.y += this.speed;

    if (this.y > height) {
      // bottom
      this.y = height;
      this.speed = 0;
    } else if (this.y + this.speed < 0) {
      // top
      this.y = 0;
      this.speed = 0;
    }

  } // end update method
}
