<template lang="pug">
  .panel.container-fluid.h-100
    .row.h-100
      .col-md-3
        Sidebar
      .col-md-13.bg-secondary-light.py-3.scroll
        slot
</template>

<script lang="ts">
import Vue from 'vue'

import pusher from '@/services/pusher'
import reportingSocket from '@/sockets/reportingSocket'

import Sidebar from './Sidebar.vue'

export default Vue.extend({
  components: {
    Sidebar
  },

  mounted () {
    pusher.boot()
    reportingSocket.listen()
  }
})
</script>
