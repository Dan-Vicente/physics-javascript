import "./styles.css";
import Phaser from "phaser";

import Loading from "./scenes/Loading";
import Game from "./scenes/Game";

const config = {
  type: Phaser.WEBGL,
  canvas: document.querySelector("#canvas"),
  antialias: true,
  pixelArt: false,
  scene: [Loading, Game],
  width: 640,
  height: 480,
  backgroundColor: "#FFFFFF"
};

new Phaser.Game(config);
