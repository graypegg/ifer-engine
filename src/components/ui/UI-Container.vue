<template>
  <div class="ifer-engine">
    <h2>{{ scene.name }}</h2>
    <p>{{ scene.display(state) }}</p>
    <ui-element v-for="(element, key) in elements" :key="key" :taxonomy="element" />
  </div>
</template>

<script>
  import UIElement from './UI-Element.vue'

  export default {
    name: 'ui-container',
    data () {
      return {
        scene: {},
        state: {}
      }
    },
    computed: {
      elements () { return (this.scene ? this.scene.ui : []) }
    },
    components: { 'ui-element': UIElement }
  }
</script>
