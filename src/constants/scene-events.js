export default {
  _advance (ifer, scene) {
    // Update all bound state data with new data from scene
    ifer.ui._vm.$children.forEach((element) => {
      if (element.isBound) {
        ifer.state.change(element.taxonomy.bind, element.value)
      }
    })
  },
  _load (ifer, scene) {
    // Update all bound UI-Elements with current state data
    ifer.ui._vm.$children.forEach((element) => {
      if (element.isBound) {
        element.value = ifer.state.find(element.taxonomy.bind)
      }
    })
  }
}
