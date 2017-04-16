export default class Thing {
  constructor (ifer, uid, object) {
    this.uid = uid
    this.name = object.name
    this.actions = object.actions

    this._ifer = ifer
  }

  listActions () {
    return this.actions.reduce((acc, action) => action.name + ', ' + acc, '').slice(0, -2)
  }
}
