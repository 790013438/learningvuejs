<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{$route.query.locale}}</p>
    <p>analasis: {{$route.query.q}}</p>
    <div style="height: 700px"></div>
    <p id="data">Some data Text</p>
    <br/>
    <button @click="confirmed = true" class="btn btn-primary">Confirm</button>
    <br/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if(confirm("You are sure to leave")) {
        next();
      } else {
        next(false);
      }
    }
  }
}
</script>
