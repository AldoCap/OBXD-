 // Obtener elementos
 this.transponse = transponseInput;
 this.tune = tuneInput;
 this.cutoff = cutoffInput;
 this.resonance = resonanceInput;
 this.outputSelect = midiOutputSelect;

 // Agregar manejadores de eventos
 this.transponse.addEventListener('input', this.handleTransponseChange.bind(this));
 this.tune.addEventListener('input', this.handleTuneChange.bind(this));
 this.cutoff.addEventListener('input', this.handleCutoffChange.bind(this));
 this.resonance.addEventListener('input', this.handleResonanceChange.bind(this));

 // Obtener los dispositivos MIDI de salida disponibles y agregarlos al select
 navigator.requestMIDIAccess()
   .then(access => {
     const outputs = access.outputs.values();
     for (let output of outputs) {
       const option = document.createElement('option');
       option.value = output.name;
       option.text = output.name;
       this.outputSelect.appendChild(option);
     }
   });

// Manejar el cambio de valor del slider CC3 VCO1 transpose
handleTransponseChange() {
 this.sendCCMessage(3, this.transponse.value);
}

// Manejar el cambio de valor del slider CC9 VCO1 tune
handleTuneChange() {
 this.sendCCMessage(9, this.tune.value);
}

// Manejar el cambio de valor del slider CC74 Cutoff
handleCutoffChange() {
 this.sendCCMessage(74, this.cutoff.value);
}

// Manejar el cambio de valor del slider CC42 Resonance
handleResonanceChange() {
 this.sendCCMessage(42, this.resonance.value);
}

// Función para enviar el mensaje CC al dispositivo seleccionado
sendCCMessage(ccNumber, ccValue) {
 const selectedOutputDevice = this.outputSelect.value;
 const ccMessage = [0xB0, ccNumber, ccValue]; // Channel 1, Control Change
 navigator.requestMIDIAccess()
   .then(access => {
     const outputs = access.outputs.values();
     for (let output of outputs) {
       if (output.name === selectedOutputDevice) {
         output.send(ccMessage);
       }
     }
   });
  }

  export {????????????}; 