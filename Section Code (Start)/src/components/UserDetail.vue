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
  methods: {
    switchName: function() {
      return this.userName.split("").reverse().join("");
    },
    resetName: function() {
      this.userName = 'floyd';
      this.$emit('resetUserName', this.userName);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
