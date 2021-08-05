<template lang="pug">
  span.cursor-pointer(@click="route()")
    slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['name', 'params'],
  methods: {
    route () {
      this.$router.push({ name: this.name, params: this.params })
    }
  }
})
</script>
