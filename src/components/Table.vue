<template lang="pug">
  table.table.table-hover
    thead
      tr
        slot(name="thead")
    tbody
      slot(name="tbody")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="sass" scoped>
td
  word-break: break-word
</style>
