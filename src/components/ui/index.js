import Vue from 'vue/dist/vue.js'

import UIContainer from './UI-Container.vue'

export default class UI {
  constructor (el) {
    this.vm = new Vue(UIContainer).$mount(el)
  }

  load (scene, state) {
    this.vm.scene = scene
    this.vm.state = state
  }

  unload () {
    this.vm.scene = {}
    this.vm.state = {}
  }
}
