<template lang="pug">
.header.d-flex.justify-content-between
  h5.mb-4.font-weight-bold {{ $route.name }}
  slot(name="search")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
