<template lang="pug">
 .date(v-tooltip="util.date.format(time)") {{ util.date.fromNow(time) }}
</template>

<script lang="ts">
import Vue from 'vue'
import tooltip from '../directives/tooltip'

export default Vue.extend({
  props: ['time'],
  directives: {
    tooltip
  }
})
</script>
