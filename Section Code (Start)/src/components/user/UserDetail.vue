<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Loaded has id : {{$route.params.id}}</p>
    <router-link tag="button"
                 :to="link"
      class="btn btn-info">Edit User</router-link>
    <br/>
    <br/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      link: {
        name: 'userEdit',
        params: {id: this.$route.params.id},
        query: {locale: 'en', q: 100},
        hash: '#data'
      }
    };
  },
  beforeRoutEnter(to, from, next) {
    next((vm) => {
      console.log(vm.link);
    })
  }
}
</script>
