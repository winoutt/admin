<template lang="pug">
.row
  .col-md-12.offset-md-2
    h5.font-weight-bold.text-center.mb-4 User
    Table
      template(v-slot:tbody)
        tr
          th Avatar
          td
            img.avatar(:src="user.avatar")
        tr
          th ID
          td {{ user.id }}
        tr
          th Username
          td {{ user.username }}
        tr
          th Email
          td {{ user.email }}
        tr
          th Full Name
          td {{ `${user.first_name} ${user.last_name}` }}
        tr
          th Title
          td {{ user.title }}
        tr
          th Date Of Birth
          td
            .date(v-if="user.date_of_birth") {{ util.date.format(user.date_of_birth) }}
        tr
          th Gender
          td {{ user.gender }}
        tr
          th Bio
          td {{ user.bio }}
        tr
          th City
          td {{ user.city }}
        tr
          th Country
          td {{ user.country }}
        tr
          th Is Online
          td {{ user.is_online }}
        tr
          th Created At
          td
            Date(:time="user.created_at")
        tr
          th Email Verified At
          td
            Date(:time="user.email_verified_at")
        tr
          th Updated At
          td
            Date(:time="user.updated_at")
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty } from 'lodash'

import Table from '../components/Table.vue'
import Date from '../components/Date.vue'
import userRequest from '../requests/userRequest'
import userState from '../state/userState'

export default Vue.extend({
  components: {
    Table,
    Date
  },

  async beforeRouteEnter (to, from, next) {
    const id = to.params.id
    const response = await userRequest.user(id)
    if (!isEmpty(response)) next()
  },

  computed: {
    user () {
      return userState.collectUser()
    }
  }
})
</script>

<style lang="sass" scoped>
@import '../sass/variables'

th
  background: $secondary
.avatar
  height: 40px
  width: 40px
  object-fit: cover
</style>
