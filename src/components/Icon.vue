<template lang="pug">
  svg.icon(v-tooltip="tooltip")
    use(:xlink:href="require('@/assets/Icons.svg') + '#' + name")
</template>

<script lang="ts">
import Vue from 'vue'
import tooltip from '../directives/tooltip'
import tooltipService from '../services/tooltip'

export default Vue.extend({
  props: ['name', 'tooltip'],
  directives: {
    tooltip
  },
  beforeDestroy () {
    tooltipService.remove()
  }
})
</script>
