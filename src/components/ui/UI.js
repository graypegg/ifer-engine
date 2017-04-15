import Vue from 'vue/dist/vue.js'

import base from './ui.html'
import UIElement from './UI-Element.js'

export default class UI {
  constructor (el) {
    this.vm = new Vue({
      el,
      name: 'IferUIRoot',
      template: base,
      data: { elements: [ ] },
      components: { 'ui-element': UIElement }
    })
  }

  load (scene) { this.vm.elements = scene.ui }
}
