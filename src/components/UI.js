import Vue from 'vue/dist/vue.js'
import base from 'constants/ui/base.html'

export default class UI {
  constructor (el) {
    this.vm = new Vue({
      el,
      name: 'root',
      template: base
    })
  }
}
