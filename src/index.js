import Scene from './components/Scene.js'
import State from './components/State.js'
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
    this.state = new State(story.state)

    // Store global config
    this.config = story.config

    // Initiate some values
    this.scene = this.scenes[this.config.firstScene]
    this.ui = null

    // Root State flags
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
      IferError.warn('Unmounted Story', 'You can\'t start an ifer instance before it\'s been mounted')
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
      load (obj) {
        // obj { scene: Scene UID } //
        let scene = _ifer.scenes[obj.scene]
        if (_ifer.flags.mounted) {
          _ifer.ui.load(scene, _ifer.state)
        } else {
          IferError.warn('Unmounted Story', 'You can\'t start an ifer instance before it\'s been mounted')
        }
      },
      loadIf (rules) {
        // rules [{ rule: Rule, scene: Scene UID }...] //
        for (let branch in rules) {
          if (_ifer.state.test(rules[branch].rule)) {
            this.load({ 'scene': rules[branch].scene })
            return true
          }
        }
        IferError.warn('No base on loadIf action', '')
        return false
      },
      quit () {
        _ifer.ui.unload()
        _ifer.flags.started = false
        _ifer.flags.mounted = false
      }
    }
  }
}
