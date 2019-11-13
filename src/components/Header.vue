<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress-bar"
             role="progressbar"
             :style="{width:quoteNum / maxQuotes * 100 + '%'}">
          {{quoteNum}} / {{maxQuotes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['maxQuotes', 'quoteNum']
}
</script>
