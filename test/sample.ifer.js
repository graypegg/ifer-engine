let sample = {
  config: {
    firstScene: 'start'
  },
  state: {
    character: {
      name: String,
      height: Number
    }
  },
  scenes: {
    'start': {
      type: 'info',
      name: 'Start',
      display: (state) => `This is the start!`,
      events: { _advance (ifer) { ifer.load(ifer.scenes.createChar) } },
      ui: []
    },
    'createChar': {
      type: 'info',
      name: 'Create Character',
      display: (state) => `Please fill out the details`,
      events: { _advance (ifer) { ifer.load(ifer.scenes.display) } },
      ui: [
        {
          type: 'textbox',
          name: 'Name',
          bind: {
            input (textbox, state) {
              textbox.set(state.character.name || '')
            },
            output (textbox, state) {
              state.character.name = textbox.value
            }
          }
        },
        {
          type: 'slider',
          name: 'Height',
          bind: {
            input (slider, state) {
              slider.set(state.character.height || 0)
            },
            output (slider, state) {
              state.character.height = slider.value
            }
          }
        }
      ]
    },
    'display': {
      type: 'info',
      name: 'Display',
      display: (state) => `Hello ${state.character.name}!`,
      events: { _advance (ifer) { ifer.quit() } },
      ui: []
    }
  }
}