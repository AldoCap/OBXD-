import { MidiController } from "../OBXD/view/midiView.js";


function main() {
  let midiController = new MidiController();

  document.body.appendChild(midiController);
}

window.addEventListener("load", main);