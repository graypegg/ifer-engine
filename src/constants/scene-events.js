function indexPath (obj, is, value) {
  if (typeof is === 'string') {
    return indexPath(obj, is.split('.'), value)
  } else if (is.length === 1 && value !== undefined) {
    obj[is[0]] = value
    return obj
  } else if (is.length === 0) {
    return obj
  } else {
    return indexPath(obj[is[0]], is.slice(1), value)
  }
}

export default {
  _advance (ifer, scene) {
    // Update all bound state data with new data from scene
    let tempState = Object.assign({}, ifer.state)
    ifer.ui._vm.$children.forEach((element) => {
      if (element.isBound) {
        indexPath(tempState, element.taxonomy.bind, element.value)
      }
    })
    console.log(tempState)
  },
  _load (ifer, scene) {
    // Update all bound UI-Elements with current state data
    ifer.ui._vm.$children.forEach((element) => {
      if (element.isBound) {
        var node = element.taxonomy.bind.split('.').reduce((o, i) => o[i], ifer.state)
        element.value = node
      }
    })
  }
}
