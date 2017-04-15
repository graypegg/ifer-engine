import iferError from './error.js'

import Scene from './components/Scene.js'
import UI from './components/ui'

export default class IferEngine {
  constructor (story) {
    // Parse Scenes
    this.scenes = {}
    for (let sceneUID in story.scenes) {
      if (story.scenes.hasOwnProperty(sceneUID)) {
        this.scenes[sceneUID] = new Scene(this, sceneUID, story.scenes[sceneUID])
      }
    }

    // Store global config
    this.config = story.config

    // Initiate some values
    this.scene = this.scenes[this.config.firstScene]
    this.ui = null

    // State flags
    this.flags = {
      mounted: false,
      started: false
    }
  }

  /*
   * -- System Methods --
   * These should be prefixed with a _
   */

  _mount (el) {
    this.ui = new UI(el)
    this.flags.mounted = true
  }

  _start () {
    if (this.flags.mounted) {
      this.ui.load(this.scene)
      this.flags.started = true
    } else {
      iferError.warn('Unmounted Story', 'You can\'t start an ifer instance before it\'s been mounted')
    }
  }

  /*
   * -- Story API actions --
   * These should NOT be prefixed with a _
   */

  load (scene) {
    if (this.flags.mounted) {
      this.ui.load(scene)
    } else {
      iferError.warn('Unmounted Story', 'You can\'t start an ifer instance before it\'s been mounted')
    }
  }
}
