import Vue from 'vue/dist/vue.js'

import UIContainer from './UI-Container.vue'

export default class UI {
  constructor (el) {
    this._vm = new Vue(UIContainer).$mount(el)
  }

  load (scene, state) {
    this._vm.scene = scene
    this._vm.state = state

    Vue.nextTick(() => {
      scene.fire('_load')
    })
  }

  unload () {
    this._vm.scene = null
    this._vm.state = null

    Vue.nextTick(() => {
      this._vm.$destroy()
    })
  }
}
