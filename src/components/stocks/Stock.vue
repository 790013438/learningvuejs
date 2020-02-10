<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mb-3">
      <div class="card-header bg-success" style="color:#fff">NAME
        <small>(Price: PRICE)</small></div>
      <div class="card-body">
        <div class="row">
          <div style="margin-left:auto">
            <input type="number" class="form-control" placeholder="Quantity">
          </div>
          <button class="btn btn-success" style="margin:auto">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock']
}
</script>

<style>

</style>

