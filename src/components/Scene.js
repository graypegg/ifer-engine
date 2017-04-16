import scenesLoader from '../constants/scene-types.js'
import sceneEvents from '../constants/scene-events.js'

export default class Scene {
  constructor (ifer, uid, scene) {
    let scenes = scenesLoader(ifer, this)

    this.uid = uid
    this.name = scene.name
    this.display = scene.display
    this.events = scene.events
    if (scene.ui) {
      this.ui = scene.ui.concat(scenes[scene.type] ? scenes[scene.type].ui : {})
    } else {
      this.ui = scenes[scene.type] ? scenes[scene.type].ui : {}
    }
    this.things = scene.things || {}

    this._ifer = ifer
  }

  fire (event) {
    if (event in sceneEvents) {
      sceneEvents[event](this._ifer, this)
    }

    if (this.events[event]) {
      if (this.events[event].with !== undefined) {
        this._ifer.api[this.events[event].run](this.events[event].with)
      } else {
        this._ifer.api[this.events[event].run]()
      }
    } else if (!(event in sceneEvents)) {
      IferError.warn('Missing Event', 'Tried to fire `' + event + '` on scene `' + this.uid + '`, but the event was available.')
    }
  }
}
