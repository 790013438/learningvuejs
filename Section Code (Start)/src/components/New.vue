<template>
  <div>
    <p>New</p>
    <h2>The New</h2>
    <button @click="count++">Increase</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  destroyed: function() {
    console.log('destroyed!');
  }
}
</script>
