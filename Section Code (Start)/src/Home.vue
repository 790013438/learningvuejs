<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr/>
    <button @click="changeStatus">change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {status: 'Critical'};
  },
  methods: {
    // es6 语法, 函数可以简写, 去掉:function
    changeStatus() {
      this.status = 'Normal';
    }
  }
}
</script>

