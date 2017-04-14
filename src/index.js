import Scene from './components/Scene.js'

export default class IferEngine {
  constructor (story) {
    // Parse Scenes
    this.scenes = {}
    for (let sceneUID in story.scenes) {
      if (story.scenes.hasOwnProperty(sceneUID)) {
        this.scenes[sceneUID] = new Scene(this, sceneUID, story.scenes[sceneUID])
      }
    }

    // Create State
  }

  load (scene) {
    console.log('I would be loading ' + scene.name + ' right now.')
  }
}
