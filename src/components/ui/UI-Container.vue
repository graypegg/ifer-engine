<template>
  <div class="ifer-engine" v-if="scene">
    <h2>{{ scene.name }}</h2>
    <p>{{ sceneContent }}</p>
    <div class="controls">
      <ui-element v-for="(element, key) in elements" :key="key" :taxonomy="element" />
    </div>
  </div>
</template>

<script>
  import UIElement from './UI-Element.vue'
  import Mustache from 'mustache'

  export default {
    name: 'ui-container',
    data () {
      return {
        scene: null,
        state: null
      }
    },
    computed: {
      elements () { return (this.scene ? this.scene.ui : []) },
      sceneContent () {
        if (this.scene) {
          return Mustache.render(this.scene.display, this.state)
        } else {
          return ''
        }
      }
    },
    components: { 'ui-element': UIElement }
  }
</script>
