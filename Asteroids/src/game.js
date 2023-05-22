import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid.js";

const DIM_X = 100;
const DIM_Y = 100;
const NUM_ASTEROIDS = 10;
class Game {
    constructor(DIM_X, DIM_Y, NUM_ASTEROIDS){
        this.gridSize = DIM_X * DIM_Y;
        this.asteroids = []; 
        this.addAsteroids(NUM_ASTEROIDS);
    }

    addAsteroids(NUM_ASTEROIDS) {
        for (let i = 0; i < NUM_ASTEROIDS; i++) {
            const position = this.randomPosition();
            this.asteroids.push(position);  
        };
    };
    randomPosition(){
        const x = Math.floor(Math.random() * DIM_X);
        const y = Math.floor(Math.random() * DIM_Y);
        return {x, y};

    }; 

    draw(ctx) {
        ctx.clearRect(0,0,DIM_X, DIM_Y); 
        for (let i = 0; i < this.asteroids.length; i++) {
            this.asteroids[i].draw(ctx);
        };

    };

    // moveObjects() {
    //     for (let i = 0; i < this.asteroids.length; i++) {
    //         let asteroid = asteroid[i];
    //         asteroid.move(asteroid.randomPosition(), vel);
    //     };
    // };


}

export default Game;