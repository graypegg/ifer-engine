import Scene from './components/Scene.js'
import UI from './components/ui/UI.js'

export default class IferEngine {
  constructor (story) {
    this.story = story

    // Parse Scenes
    this.scenes = {}
    for (let sceneUID in story.scenes) {
      if (story.scenes.hasOwnProperty(sceneUID)) {
        this.scenes[sceneUID] = new Scene(this, sceneUID, story.scenes[sceneUID])
      }
    }

    // Initiate some values
    this.scene = this.scenes[this.story.config.firstScene]
    this.ui = null
  }

  /*
   * -- System Methods --
   * These should be prefixed with a _
   */

  _mount (el) { this.ui = new UI(el) }

  _start () {
    console.log(this.scene)
    this.ui.load(this.scene)
  }

  /*
   * -- Story API actions --
   * These should NOT be prefixed with a _
   */

  load (scene) {
    console.log('I would be loading ' + scene.name + ' right now.')
  }
}
