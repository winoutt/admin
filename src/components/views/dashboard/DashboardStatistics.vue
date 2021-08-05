<template lang="pug">
  .dashboard-statistics.row
    .col.mb-3
      h6.font-weight-bold Monthly Statistics
      .monthly-statistics
        canvas#monthlyChart
</template>

<script lang="ts">
import Vue from 'vue'
import Chart from 'chart.js'
import analyticsState from '../../../state/analyticsState'

export default Vue.extend({
  computed: {
    monthlyStatistics () {
      return analyticsState.collectMonthlyStatistics()
    }
  },

  methods: {
    initChart () {
      const data = {
        labels: this.monthlyStatistics.days,
        datasets: [
          {
            label: 'Users',
            fill: false,
            borderColor: '#B877DB',
            backgroundColor: '#B877DB',
            borderWidth: 1,
            data: this.monthlyStatistics.users
          },
          {
            label: 'Posts',
            fill: false,
            borderColor: '#25B2BC',
            backgroundColor: '#25B2BC',
            borderWidth: 1,
            data: this.monthlyStatistics.posts
          },
          {
            label: 'Stars',
            fill: false,
            borderColor: '#E95678',
            backgroundColor: '#E95678',
            borderWidth: 1,
            data: this.monthlyStatistics.stars
          },
          {
            label: 'Comments',
            fill: false,
            borderColor: '#F09383',
            backgroundColor: '#F09383',
            borderWidth: 1,
            data: this.monthlyStatistics.comments
          }
        ]
      }
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [{ gridLines: { display: false } }]
        }
      }
      // eslint-disable-next-line
      const monthlyChart = new Chart('monthlyChart', {
        type: 'line',
        data,
        options
      })
    }
  },

  mounted () {
    this.initChart()
  }
})
</script>

<style lang="sass" scoped>
.monthly-statistics
  height: 300px
</style>
