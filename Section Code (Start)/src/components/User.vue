<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <span>{{userName}}</span>
        <button @click="changeUserName">change User Name</button>
        <p>Age is {{userAge}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                  :userName="userName"
                  :userAge="userAge"
                  @resetUserName="userName = $event"
                  :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :userAge="userAge"
                  @userAgeWasChanged="userAge = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import {eventBus} from '../main.js'

    export default {
        data: function() {
          return {
            userName: 'Floyd',
            userAge: 30
          };
        },
        methods: {
          changeUserName: function(){
            this.userName = 'Manhattan';
          },
          resetName: function(arg) {
            this.userName = arg
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
