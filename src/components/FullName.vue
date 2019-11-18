<template>
  <div>
    <div class="form-group">
      <label for="FirstName">First Name</label>
      <input v-model="firstName" id="FirstName" type="text" class="form-control"/>
    </div>
    <div class="form-group">
      <label for="LastName">Last Name</label>
      <input v-model="lastName" id="LastName" type="text" class="form-control"/>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    firstName() {
      this.$emit('fullNameChanged', this.fullName);
    },
    lastName: function() {
      this.$emit('fullNameChanged', this.fullName);
    }
  }
}
</script>

<style>

</style>

