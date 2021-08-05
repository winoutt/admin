<template lang="pug">
.content
  PanelHeader
    template(v-slot:search)
      slot(name="search")
  slot(name="content")
</template>

<script lang="ts">
import Vue from 'vue'

import PanelHeader from '@/components/PanelHeader.vue'

export default Vue.extend({
  components: {
    PanelHeader
  }
})
</script>

<style lang="sass" scoped>
.content
  height: calc(100vh - 32px)
</style>
