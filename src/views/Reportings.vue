<template lang="pug">
Content
  template(v-slot:content)
    .row
      .col
        Table
          template(v-slot:thead)
            th ID
            th Type
            th.no-wrap Reportable ID
            th Category
            th Message
            th.no-wrap Created at
            th Actions
          template(v-slot:tbody)
            tr(v-for="report in reportings")
              td.no-wrap {{ report.id }}
              td {{ reportableType(report.reportable_type) }}
              td
                Route(
                  :name="routeName(report.reportable_type)"
                  :params="{ id: report.reportable_id }"
                ) {{ report.reportable_id }}
              td {{ report.category }}
              td {{ report.message }}
              td
                Date(:time="report.created_at")
              td
                .actions.d-flex
                  Route(
                    :name="routeName(report.reportable_type)"
                    :params="{ id: report.reportable_id }"
                  )
                    Icon.cursor-pointer.mr-2(
                      name="eye"
                      :tooltip="`View ${reportableType(report.reportable_type)}`"
                    )
                  Icon.cursor-pointer.mr-2(name="accept" tooltip="Take action" @click.native="approve(report.id)")
                  Icon.cursor-pointer(name="close-alt" tooltip="Delete report" @click.native="remove(report.id)")
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty, trim } from 'lodash'

import reportingRequest from '../requests/reportingRequest'
import reportingState from '../state/reportingState'

import Table from '../components/Table.vue'
import Icon from '../components/Icon.vue'
import Date from '../components/Date.vue'
import Route from '../components/Route.vue'
import Content from '@/components/Content.vue'

export default Vue.extend({
  components: {
    Content,
    Table,
    Icon,
    Date,
    Route
  },

  async beforeRouteEnter (to, from, next) {
    const response = await reportingRequest.reportings()
    if (!isEmpty(response)) next()
  },

  computed: {
    reportings () {
      return reportingState.collectReportings()
    }
  },

  methods: {
    reportableType (type: string) {
      return trim(type, 'App\\').toLowerCase()
    },
    routeName (type: string) {
      return `${trim(type, 'App\\')}`
    },
    approve (reportId: string) {
      reportingRequest.approve(reportId)
    },
    remove (reportId: string) {
      reportingRequest.delete(reportId)
    }
  }
})
</script>
