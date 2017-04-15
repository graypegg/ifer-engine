export default (ifer, scene) => {
  return {
    'info': {
      ui: [
        {
          type: 'button',
          name: '...',
          bind: {
            click () {
              return scene.fire('_advance')
            }
          }
        }
      ]
    }
  }
}
