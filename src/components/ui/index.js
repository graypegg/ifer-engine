import Vue from 'vue/dist/vue.js'

import UIContainer from './UI-Container.vue'

export default class UI {
  constructor (el) {
    this.vm = new Vue(UIContainer).$mount(el)
  }

  load (scene) { this.vm.elements = scene.ui }
}
