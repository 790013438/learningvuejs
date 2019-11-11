<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">reset User Name</button>
    </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: [String, Array],
      default: 'Max'
    }
  },
  data: function(){
    return {
      name: this.userName
    }
  },
  methods: {
    switchName: function() {
      return this.userName.split("").reverse().join("");
    },
    resetName: function() {
      this.name = 'Anna';
      this.$emit('resetUserName', this.name);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
