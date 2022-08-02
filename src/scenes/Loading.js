/* jshint esversion: 9 */
import Phaser from "phaser";
export default class Loading extends Phaser.Scene {
  constructor() {
    super({ key: "Loading" });
  }

  preload() {
    console.log("Loading assets...");
    this.load.glsl("test", require("../assets/shaders/test.glsl"));
  }

  create() {
    // Start Scene
    this.scene.start("Game");
  }

  update() {}
}
