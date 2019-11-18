<template>
  <div class="row">
    <div class="choice">
      <div class="box hoverYes"
           :class="{yes:isSwitched}"
           @click="switchStatus(true)">Yes</div>
      <div class="box leftBorder hoverNo"
           :class="{no:!isSwitched}"
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
.box {
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 35px;
  cursor: pointer;
}
.leftBorder {
  border-left: 1px solid black;
}
.yes {
  background-color: lightskyblue;
}
.no {
  background-color: lightcoral;
}
.hoverYes:hover {
  background-color: lightskyblue;
}
.hoverNo:hover {
  background-color: lightcoral;
}
</style>

