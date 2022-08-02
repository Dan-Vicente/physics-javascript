import Phaser from "phaser";
import * as Planck from "planck-js";
import Box from "../classes/Box";
import Poly from "../classes/Poly";
import Circle from "../classes/Circle";
import Edge from "../classes/Edge";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  init() {
    this.width = 640;
    this.height = 480;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.scaleFactor = 30;
    this.bodies = [];
    this.gravity = 3; // 3 is normal
  }

  create() {
    this.pointer = this.input.activePointer;

    // Init World
    this.world = Planck.World(Planck.Vec2(0, this.gravity));

    //// Make some test bodies
    // Edges are always static
    new Edge(this, 200, 300, 600, 300);
    // Polygon (scene, x, y, points, dynamic (false for static), fixedRotation)
    new Poly(this, 340, 100, [[0, 0], [0, 70], [50, 100]], true, false);
    // Box/Rect (scene, x, y, width, height, dynamic (false for static), fixedRotation)
    new Box(this, 400, 100, 30, 30, true, false);
    // Circle (scene, cx, cy, )
    new Circle(this, 300, 20, 10, true, false);

    // Camera
    this.cameras.main.setBackgroundColor("#9bfbf0");
  }

  update() {
    this.world.step(1 / 30);
    this.world.clearForces();
  }
}
