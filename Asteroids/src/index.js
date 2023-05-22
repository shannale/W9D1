import MovingObject from "./moving_object.js";

const movingObject = require("./moving_object.js")

window.MovingObject = MovingObject;

// console.log("Webpack is working!")
const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

window.mo = mo;



const canvasEl = document.getElementById("game-canvas")

const ctx = canvasEl.getContext("2d")

window.ctx = ctx;




