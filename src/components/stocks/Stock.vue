<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-3">
      <div class="card-header bg-success" style="color:#fff">{{stock.name}}
        <small>(Price: {{stock.price}})</small></div>
      <div class="card-body">
        <div class="row">
          <div style="margin-left:auto">
            <input type="number" class="form-control" placeholder="Quantity"
            v-model="quantity">
          </div>
          <button class="btn btn-success" style="margin:auto"
                                          @click="buy"
                                          :disabled="disabled">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buy() {
      const order = {
        id: this.stock.id,
        name: this.stock.name,
        price: this.stock.price,
        quantity: this.quantity
      }
      console.log(order);
    }
  },
  computed: {
    disabled() {
      return this.quantity <= 0 || Math.floor(this.quantity) != this.quantity;
    }
  }
}
</script>

<style>

</style>

