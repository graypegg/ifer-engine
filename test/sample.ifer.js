let sample = {
  config: {
    firstScene: 'start'
  },
  state: {
    character: {
      name: "",
      height: 0
    }
  },
  scenes: {
    'start': {
      type: 'info',
      name: 'Start',
      display: (state) => `This is the start!`,
      events: {
        _advance: {
          run: 'load',
          with: ['createChar']
        }
      },
      ui: []
    },
    'createChar': {
      type: 'info',
      name: 'Create Character',
      display: (state) => `Please fill out the details`,
      events: {
        _advance: {
          run: 'load',
          with: ['displayInfo']
        }
      },
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
    'displayInfo': {
      type: 'info',
      name: 'Display',
      display: (state) => `Hello ${state.character.name}!`,
      events: {
        _advance: {
          run: 'quit'
        }
      },
      ui: []
    }
  }
}
