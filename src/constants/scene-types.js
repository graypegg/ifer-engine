export default (ifer) => {
  return {
    'info': {
      ui: [
        {
          type: 'button',
          name: '...',
          bind: {
            click (_1, _2, scene) {
              return scene.fire('_advance')
            }
          }
        }
      ]
    }
  }
}
