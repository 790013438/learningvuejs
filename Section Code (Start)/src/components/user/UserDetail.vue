<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Loaded has id : {{$route.params.id}}</p>
    <router-link tag="button"
                 :to="{name: 'userEdit', params: {id: $route.params.id}}"
      class="btn btn-info">Edit User</router-link>
  </div>
</template>
