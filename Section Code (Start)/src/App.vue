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
        <hr/>
        <button class="btn btn-primary btn-block" @click="fetchData">Get Data</button>
        <br/>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.mail}}</li>
        </ul>
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
      },
      users: []
    };
  },
  methods: {
    onSubmit: function() {
      this.$http.post('', this.user)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        });
      // 异步
      console.log('已提交')
    },
    fetchData: function() {
      this.$http.get('')
        .then(response => {
          // response 提供了转化为json的方法
          // 由于异步，返回的对象是Promise
          console.log(response.json());
          return response.json();
        }, error => {
          console.log(error);
        })
        .then(data => {
          // promise 通过then获取数据
          console.log(data)
          for (let key in data) {
            this.users.push(data[key]);
          }
        });
      console.log('正在获取数据请等待')
    }
  }
}
</script>

<style>
</style>
