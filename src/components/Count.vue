<template lang="pug">
  .card.bg-grey-dark
    .card-body.py-2
      .count-wrapper.d-flex.justify-content-between
        .count-details
          .text.mb-1 {{ count.type }}
          h5.count.font-weight-bold
            | {{ count.count }}
            span.percentage.text-grey(v-if="count.percentage") &nbsp;- {{ count.percentage }}%
        Icon.icon.align-self-center(:name="count.icon")
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './Icon.vue'

export default Vue.extend({
  props: ['count'],
  components: {
    Icon
  }
})
</script>

<style lang="sass" scoped>
.count-details
  .percentage
    font-size: 0.95rem
.icon
  width: 30px
  height: 30px
</style>
