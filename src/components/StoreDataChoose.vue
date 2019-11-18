<template>
  <div class="row">
    <div class="choice">
      <div id="yes"
           :class="{active:isSwitched}"
           @click="switchStatus(true)">Yes</div>
      <div id="no" class="leftBorder"
           :class="{active:!isSwitched}"
           @click="switchStatus(false)">No</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['switched'],
  data: function() {
    return {
      isSwitched: this.switched
    };
  },
  methods: {
    switchStatus: function(isOn) {
      this.isSwitched = isOn;
      this.$emit('switched', isOn);
    }
  }
}
</script>

<style scoped>
.choice {
  display: flex;
  border: 1px solid black;
  margin: 15px;
  width: 77px;
}
#yes, #no {
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 35px;
  cursor: pointer;
}
.leftBorder {
  border-left: 1px solid black;
}
#yes.active, #yes:hover {
  background-color: lightskyblue;
}
#no.active, #no:hover {
  background-color: lightcoral;
}
</style>

