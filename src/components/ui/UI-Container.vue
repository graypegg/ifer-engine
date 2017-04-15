<template>
  <div class="ifer-engine">
    <ui-element v-for="(element, key) in elements" :key="key" :taxonomy="element" />
  </div>
</template>

<script>
  import UIElement from './UI-Element.vue'

  export default {
    name: 'ui-container',
    data () { return { elements: [ ] } },
    components: { 'ui-element': UIElement }
  }
</script>
