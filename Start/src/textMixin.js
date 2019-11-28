export {textMixin}

const textMixin = {
  data: function() {
    return {
      text: ''
    };
  },
  computed: {
    textCount: function() {
      return this.text + " (" + this.text.length + ")"
    }
  }
}
