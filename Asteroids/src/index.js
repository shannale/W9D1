import Asteroid from "./asteroid.js";
import MovingObject from "./moving_object.js";
import Game from "./game.js";


const movingObject = require("./moving_object.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;

// console.log("Webpack is working!")
const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
  });

window.mo = mo;

const ast1 = new Asteroid({ pos: [30, 30]
  });

window.ast1 = ast1;

const game1 = new Game({
  DIM_X: 100,
  DIM_Y: 100,
  NUM_ASTEROIDS: 10,
})

window.game1 = game1;

const canvasEl = document.getElementById("game-canvas")

const ctx = canvasEl.getContext("2d")

window.ctx = ctx;




