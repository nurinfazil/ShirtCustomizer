import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./shirtbot.png",
  fullDecal: "./shirtbot.png",
});

export default state;
