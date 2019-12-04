<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <form class="form-group">
          <label for="username">Username</label>
          <input id="username" class="form-control" type="text"
                                                    v-model="user.username"/>
          <label for="mail">Mail</label>
          <input id="mail" class="form-control" type="mail"
                                                v-model="user.mail"/>
          <br/>
          <button class="btn btn-primary btn-block"
                  @click.prevent="onSubmit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        username: '',
        mail: ''
      }
    };
  },
  methods: {
    onSubmit: function() {
      console.log(this.user)
    }
  }
}
</script>

<style>
</style>
