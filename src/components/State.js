export default class State {
  constructor (data) {
    this.data = data
  }

  find (path) {
    return path.split('.').reduce((o, i) => o[i], this.data)
  }

  change (path, value, part) {
    if (typeof path === 'string') {
      return this.change(path.split('.'), value, this.data)
    } else if (path.length === 1) {
      part[path[0]] = value
      return part
    } else {
      part[path[0]] = this.change(path.slice(1), value, part)
      return part
    }
  }

  test (rule) {
    let stateNode = rule[0].split('.').reduce((o, i) => o[i], this.data)
    switch (rule[1]) {
      case '=':
        return stateNode === rule[3]
      default:
        IferError.warn('Unknown State Comparison', 'Tried to run the comparison `' + rule[0] + ' ' + rule[1] + ' ' + rule[2] + '`. I don\'t know what ' + rule[1] + ' means.')
        return false
    }
  }
}
