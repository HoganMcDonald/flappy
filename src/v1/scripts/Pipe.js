class Pipe {
  constructor() {
    this.gap = 140;
    this.width = 30;
    this.color = 'teal';
    this.speed = 5;

    this.x = width;
    this.gapStart = Utility.random(100, 500);
  }

  new() {
    pipes.push({x: width, y: 0});
  }

  render() {
    fill(this.color);
    rect(this.x, 0, this.width, this.gapStart);
    rect(this.x, (this.gapStart + this.gap), this.width, (700 - (this.gap + this.gapStart)))
  }

  update() {
    this.x -= this.speed;
  }
}
