export default (ifer, scene) => {
  return {
    'info': {
      ui: [
        {
          type: 'button',
          name: '...',
          click: '_advance'
        }
      ]
    },
    // TODO: This will have to repeat buttons for all things in the scene with actions...
    'in world': {
      ui: [
        {
          type: 'button',
          name: '...',
          click: '_advance'
        }
      ]
    }
  }
}
