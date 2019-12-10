<template>
  <div>
    <h1>The User Page</h1>
    <hr/>
    <p>Loaded ID: {{id}}</p>
    <button @click="navHome" class="btn btn-primary">Go Home</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    '$route'(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navHome: function() {
      this.$router.push('/');
    }
  }
}
</script>
