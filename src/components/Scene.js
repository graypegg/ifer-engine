import scenesLoader from '../constants/scene-types.js'

export default class Scene {
  constructor (ifer, uid, scene) {
    let scenes = scenesLoader(ifer)

    this.uid = uid
    this.name = scene.name
    this.display = scene.display
    this.events = scene.events
    this.ui = scene.ui.concat(scenes[scene.type].ui)

    this._ifer = ifer
  }

  fire (event) {
    if (this.events[event]) {
      this.events[event](this._ifer)
    }
  }
}
