import * as Util from "./util.js";
import MovingObject from "./moving_object.js";

const RADIUS = 25;
const COLOR = '#F89880';

class Asteroid extends MovingObject {
    
    constructor(options) {
        const pos = options.pos;
        const radius = RADIUS;
        const vel = Util.randomVec(5);
        const color = COLOR;
        // super({pos: pos, vel: vel, radius: radius, color: color})
        super({pos, vel, radius, color});
    }
}

export default Asteroid;
