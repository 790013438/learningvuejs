<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <button @click="resetName">reset User Name</button>
        <button @click="resetFn(newName)">通过绑定函数改变数据</button>
    </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: [String, Array],
      default: 'Max'
    },
    resetFn: [Function]
  },
  data: function(){
    return {
      name: this.userName,
      newName: '蝉鸣'
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
