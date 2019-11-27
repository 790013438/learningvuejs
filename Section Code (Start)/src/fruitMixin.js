export { fruitMixin }
const fruitMixin = {
  data: function() {
    return {
      fruits: ['Apple', 'Blanana', 'Orange', 'Pineapple'],
      filter: ''
    };
  },
  computed: {
    fruitesFiltered: function() {
      return this.fruits.filter((item) => {
        let regExp = new RegExp(this.filter, 'gi');
        return regExp.test(item);
      });
    }
  },
  created() {
    console.log('Created');
  }
}
