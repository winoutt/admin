<template lang="pug">
  li.py-1.px-4.d-flex.align-items-center
    router-link.nav(:to="{ name: router }") {{ text }}
    Spinner.ml-3(v-if="canShowReportingIndicator")
</template>

<script lang="ts">
import Vue from 'vue'
import Spinner from './Spinner.vue'
import reportingState from '../state/reportingState'

export default Vue.extend({
  props: ['text', 'router'],
  components: {
    Spinner
  },

  computed: {
    canShowReportingIndicator () {
      const isReportingMenuItem = this.router === 'Reportings'
      const hasUnseen = reportingState.collectHasUnseen()
      return isReportingMenuItem && hasUnseen
    }
  }
})
</script>

<style lang="sass" scoped>
@import '../sass/variables'

li
  a
    text-decoration: none
    color: inherit
    &.router-link-active
      color: $primary
    &:hover
      color: darken($primary, 8%)
</style>
