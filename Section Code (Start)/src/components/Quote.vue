<template>
  <div>
    <p>{{quote}}</p>
  </div>
</template>

<script>
export default {
  props: ['quote']
}
</script>

<style scoped>
div {
  border: 1px solid black;
  box-shadow: 1px 1px 2px black;
  margin-top: 30px;
  padding: 24px 12px;
  text-align: center;
}
p {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
