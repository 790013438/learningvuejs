<template>
    <div></div>
</template>

<script>
export default {
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

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
