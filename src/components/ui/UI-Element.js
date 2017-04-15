import uiElement from './ui-element.html'

export default {
  template: uiElement,
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
  }
}
