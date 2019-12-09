<template>
  <div>
    <h1>The User Page</h1>
    <button @click="navHome" class="btn btn-primary">Go Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    navHome: function() {
      this.$router.push('/');
    }
  }
}
</script>
