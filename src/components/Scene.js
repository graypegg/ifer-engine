import scenesLoader from '../constants/scene-types.js'
import sceneEvents from '../constants/scene-events.js'

export default class Scene {
  constructor (ifer, uid, scene) {
    let scenes = scenesLoader(ifer, this)

    this.uid = uid
    this.name = scene.name
    this.display = scene.display
    this.events = scene.events
    this.ui = scene.ui.concat(scenes[scene.type].ui)

    this._ifer = ifer
  }

  fire (event) {
    if (event in sceneEvents) {
      sceneEvents[event](this._ifer, this._ifer.ui, this, this._ifer.state)
    }

    if (this.events[event]) {
      if (this.events[event].with !== undefined) {
        this._ifer.api[this.events[event].run](...this.events[event].with)
      } else {
        this._ifer.api[this.events[event].run]()
      }
    }
  }
}
