class MidiController extends HTMLElement {

    constructor() {

      super();
  
  
      const container = document.createElement('div');
      container.setAttribute('class', 'midi-controller');
  
      const title = document.createElement('h1');
      title.innerText = 'OBXD MIDI CC Controller';
  
      const transponseLabel = document.createElement('label');
      transponseLabel.setAttribute('for', 'transponse');
      transponseLabel.innerText = 'CC3 (Transponse):';
  
      const transponseInput = document.createElement('input');
      transponseInput.setAttribute('type', 'range');
      transponseInput.setAttribute('id', 'transponse');
      transponseInput.setAttribute('min', '0');
      transponseInput.setAttribute('max', '127');
      transponseInput.setAttribute('value', '64');
  
      const tuneLabel = document.createElement('label');
      tuneLabel.setAttribute('for', 'tune');
      tuneLabel.innerText = 'CC9 (Tune):';
  
      const tuneInput = document.createElement('input');
      tuneInput.setAttribute('type', 'range');
      tuneInput.setAttribute('id', 'tune');
      tuneInput.setAttribute('min', '0');
      tuneInput.setAttribute('max', '127');
      tuneInput.setAttribute('value', '64');
  
      const cutoffLabel = document.createElement('label');
      cutoffLabel.setAttribute('for', 'cutoff');
      cutoffLabel.innerText = 'CC74 (Cutoff):';
  
      const cutoffInput = document.createElement('input');
      cutoffInput.setAttribute('type', 'range');
      cutoffInput.setAttribute('id', 'cutoff');
      cutoffInput.setAttribute('min', '0');
      cutoffInput.setAttribute('max', '127');
      cutoffInput.setAttribute('value', '64');
  
      const resonanceLabel = document.createElement('label');
      resonanceLabel.setAttribute('for', 'resonance');
      resonanceLabel.innerText = 'CC42 (Resonance):';
  
      const resonanceInput = document.createElement('input');
      resonanceInput.setAttribute('type', 'range');
      resonanceInput.setAttribute('id', 'resonance');
      resonanceInput.setAttribute('min', '0');
      resonanceInput.setAttribute('max', '127');
      resonanceInput.setAttribute('value', '64');
  
      const midiOutputLabel = document.createElement('label');
      midiOutputLabel.setAttribute('for', 'midi-output-select');
      midiOutputLabel.innerText = 'Seleccionar dispositivo de salida MIDI:';
  
      const midiOutputSelect = document.createElement('select');
      midiOutputSelect.setAttribute('id', 'midi-output-select');
  
     this.appendChild(container); 
      container.appendChild(title);
      container.appendChild(transponseLabel);
      container.appendChild(transponseInput);
      container.appendChild(tuneLabel);
      container.appendChild(tuneInput);
      container.appendChild(cutoffLabel);
      container.appendChild(cutoffInput);
      container.appendChild(resonanceLabel);
      container.appendChild(resonanceInput);
      container.appendChild(midiOutputLabel);
      container.appendChild(midiOutputSelect);

    }
}

customElements.define("midi-controller", MidiController);

export {MidiController}; 