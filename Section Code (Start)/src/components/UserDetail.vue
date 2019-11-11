<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{age}}</p>
        <button @click="resetName">reset User Name</button>
        <button @click="resetFn(newName)">通过绑定函数改变数据</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  props: {
    userName: {
      type: [String, Array],
      default: 'Max'
    },
    resetFn: [Function],
    userAge: Number
  },
  data: function(){
    return {
      name: this.userName,
      newName: '蝉鸣',
      age: this.userAge
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
  },
  created() {
    eventBus.$on('userAgeWasChanged', (age)=> {
      this.age = age;
    });
  }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
