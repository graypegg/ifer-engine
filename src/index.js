import Scene from './components/Scene.js'
import UI from './components/UI.js'

export default class IferEngine {
  constructor (story) {
    // Parse Scenes
    this.scenes = {}
    for (let sceneUID in story.scenes) {
      if (story.scenes.hasOwnProperty(sceneUID)) {
        this.scenes[sceneUID] = new Scene(this, sceneUID, story.scenes[sceneUID])
      }
    }

    // Initiate some values
    this.ui = null
  }

  /*
   * -- System Methods --
   * These should be prefixed with a _
   */

  _mount (el) { this.ui = new UI(el) }

  /*
   * -- Story API actions --
   * These should NOT be prefixed with a _
   */

  load (scene) {
    console.log('I would be loading ' + scene.name + ' right now.')
  }
}
