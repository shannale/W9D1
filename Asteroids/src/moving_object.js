class MovingObject {
    // const canvasElement = 
    constructor(options) {
    this.pos = options.pos 
    this.vel = options.vel
    this.radius = options.radius
    this.color = options.color
    };

    // draw(ctx) {
    //   ctx.beginPath();
    //   ctx.arc(200, 75, 50, 0, 2 * Math.PI, true);
    //   ctx.stroke();

    // };

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
      ctx.fillStyle = this.color;
      ctx.fill();
  };

  move(pos, vel) {
    let newPos = [];
      pos[0] += vel[0];
      pos[1] += vel[1];
  
      newPos = [pos[0],pos[1]];
      return newPos
  }

};


// const movingObject = () => {
//   const mo = new MovingObject({
//       pos: [30, 30],
//       vel: [10, 10],
//       radius: 5,
//       color: "#00FF00"
//     });
// }

  export default MovingObject;


// checking draw(ctx) 
// check move 
// check moving object instance
// check move