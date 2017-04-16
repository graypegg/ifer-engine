<template>
  <div class="ui-element-container">

    <!-- Textbox input -->
    <div v-if="taxonomy.type === 'textbox'" class="ui-element textbox">
      <input type="text" v-model="value" />
    </div>

    <!-- Button -->
    <div v-if="taxonomy.type === 'button'" class="ui-element button">
      <button @click="click">{{ taxonomy.name }}</button>
    </div>

    <!-- Slider (range) input -->
    <div v-if="taxonomy.type === 'slider'" class="ui-element slider">
      <input type="number" min="1" max="10" v-model="value" />
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      taxonomy: {
        required: true,
        type: Object
      }
    },
    data () {
      return {
        value: null
      }
    },
    methods: {
      click () {
        if (this.taxonomy.click) {
          console.log('yay')
          this.$parent.scene.fire(this.taxonomy.click)
        }
      }
    },
    computed: {
      isBound () {
        return this.taxonomy.bind !== undefined
      }
    }
  }
</script>
