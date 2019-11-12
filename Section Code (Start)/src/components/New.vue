<template>
  <div>
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
  },
  deactivated: function() {
    console.log('deactivated!');
  },
  activated: function() {
    console.log('activated');
  }
}
</script>
