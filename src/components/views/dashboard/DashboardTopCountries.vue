<template lang="pug">
  .dashboard-top-countries.row
    .col
      h6.font-weight-bold.mb-3 Top Ten Countries
      .row.align-items-center
        .col-md-8
          Table
            template(v-slot:thead)
              th Position
              th Country
              th Users
            template(v-slot:tbody)
              tr(v-for="(topCountry, index) in topCountries")
                td {{ index + 1 }}
                td {{ topCountry.country }}
                td {{ topCountry.count }}
        .col-md-8
          canvas#topCountriesChart
</template>

<script lang="ts">
import Vue from 'vue'
import { map, take, sum } from 'lodash'
import Chart from 'chart.js'

import Table from '../../Table.vue'
import analyticsState from '../../../state/analyticsState'

export default Vue.extend({
  components: {
    Table
  },

  computed: {
    topCountries () {
      return analyticsState.collectTopCountries()
    },
    topFourCountries () {
      const topCountries = analyticsState.collectTopCountries()
      const countries = take(map(topCountries, country => country.country), 4)
      countries.push('Other')
      const counts = take(map(topCountries, country => country.count), 4)
      const usersCount = analyticsState.collectUsersCount()
      counts.push(usersCount - sum(counts))
      return { countries, counts }
    }
  },

  methods: {
    initTopCountriesChart () {
      const data = {
        labels: this.topFourCountries.countries,
        datasets: [{
          data: this.topFourCountries.counts,
          backgroundColor: [
            '#B877DB',
            '#25B2BC',
            '#E95678',
            '#F09383',
            '#2E303E'
          ],
          borderWidth: 0
        }]
      }
      // eslint-disable-next-line
      const pieChart = new Chart('topCountriesChart', {
        type: 'pie',
        data
      })
    }
  },

  mounted () {
    this.initTopCountriesChart()
  }
})
</script>
