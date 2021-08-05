<template lang="pug">
Content
  template(v-slot:content)
    .dashboard
      DashboardCounts
      DashboardTopCountries
      DashboardStatistics
</template>

<script lang="ts">
import Vue from 'vue'

import analyticsRequest from '../requests/analyticsRequest'
import util from '../services/util'

import Content from '@/components/Content.vue'
import DashboardCounts from '../components/views/dashboard/DashboardCounts.vue'
import DashboardStatistics from '../components/views/dashboard/DashboardStatistics.vue'
import DashboardTopCountries from '../components/views/dashboard/DashboardTopCountries.vue'

export default Vue.extend({
  components: {
    Content,
    DashboardCounts,
    DashboardStatistics,
    DashboardTopCountries
  },

  async beforeRouteEnter (to, from, next) {
    const requests = [
      analyticsRequest.counts(),
      analyticsRequest.topCountries(),
      analyticsRequest.monthlyStatistics()
    ]
    const { isFailed } = await util.bulkRequest(requests)
    if (!isFailed) next()
  }
})
</script>
