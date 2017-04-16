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

    // Create initial state
    this.state = Object.assign({}, story.state)

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
      this.ui.load(this.scene, this.state)
      this.flags.started = true
    } else {
      iferError.warn('Unmounted Story', 'You can\'t start an ifer instance before it\'s been mounted')
    }
  }

  _update (state) {
    this.state = state
  }

  /*
   * -- Story API actions --
   * These should NOT be prefixed with a _
   */

  get api () {
    let _ifer = this
    return {
      load (sceneUID) {
        let scene = _ifer.scenes[sceneUID]
        if (_ifer.flags.mounted) {
          _ifer.ui.load(scene, _ifer.state)
        } else {
          iferError.warn('Unmounted Story', 'You can\'t start an ifer instance before it\'s been mounted')
        }
      },
      quit () {
        _ifer.ui.unload()
        _ifer.flags.started = false
        _ifer.flags.mounted = false
      }
    }
  }
}
