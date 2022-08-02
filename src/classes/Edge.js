import Phaser from "phaser";
import * as Planck from "planck-js";

export default class Edge extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, x2, y2, isDynamic) {
    super(scene, x, y);

    // We don't generate a texture because the bounds logic is annoying
    const graphics = scene.add.graphics();
    graphics.lineStyle(4, 0x333333, 1);
    graphics.beginPath();
    graphics.moveTo(x, y);
    graphics.lineTo(x2, y2);
    graphics.closePath();
    graphics.strokePath();

    this.scene = scene;
    this.isDynamic = isDynamic;
    this.isFixed = true;
    this.scene.add.existing(this);

    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;

    this.b = scene.world.createBody();
    if (this.isDynamic) {
      this.b.setDynamic();
    }

    this.b.createFixture(
      Planck.Edge(
        Planck.Vec2(this.x / scene.scaleFactor, this.y / scene.scaleFactor),
        Planck.Vec2(this.x2 / scene.scaleFactor, this.y2 / scene.scaleFactor)
      ),
      {
        friction: 1,
        restitution: 0.5,
        density: 1
      }
    );

    this.b.setMassData({
      mass: 1,
      center: Planck.Vec2(),
      I: 0
    });
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
  }
}
