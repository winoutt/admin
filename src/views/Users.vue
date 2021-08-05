<template lang="pug">
Content
  template(v-slot:search)
    Search(v-model="term" @input="search(term)")
  template(v-slot:content)
    .users
      .row
        .col
          Table
            template(v-slot:thead)
              th ID
              th.no-wrap Full Name
              th Username
              th Email
              th Gender
              th.no-wrap Created at
              th Actions
            template(v-slot:tbody)
              tr(v-for="user in users")
                td.no-wrap {{ user.id }}
                td {{ `${user.first_name} ${user.last_name}` }}
                td {{ user.username }}
                td {{ user.email }}
                td {{ user.gender }}
                td
                  Date(:time="user.created_at")
                td
                  .actions.d-flex
                    Icon.cursor-pointer.mr-2(
                      name="eye"
                      tooltip="View"
                      @click.native="viewUser(user.id)"
                    )
                    Icon.cursor-pointer.mr-2(
                      name="mail"
                      tooltip="Mail"
                      @click.native="mailUser(user.email)"
                    )
                    Icon.cursor-pointer(
                      name="play"
                      tooltip="Unblock"
                      v-if="user.deleted_at"
                      @click.native="unblock(user.id)"
                      :key="`unblock-${user.id}`"
                    )
                    Icon.cursor-pointer(
                      name="pause"
                      tooltip="Block"
                      v-else
                      @click.native="block(user.id)"
                      :key="`block-${user.id}`"
                    )
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty, debounce } from 'lodash'

import userState from '../state/userState'
import userRequest from '../requests/userRequest'

import Table from '../components/Table.vue'
import Icon from '../components/Icon.vue'
import Date from '../components/Date.vue'
import Search from '@/components/Search.vue'
import Content from '@/components/Content.vue'

export default Vue.extend({
  components: {
    Table,
    Icon,
    Date,
    Search,
    Content
  },

  async beforeRouteEnter (to, from, next) {
    const response = await userRequest.users()
    if (!isEmpty(response)) next()
  },

  computed: {
    users () {
      return userState.collectUsers()
    }
  },

  data () {
    return {
      term: ''
    }
  },

  methods: {
    viewUser (userId: string) {
      this.$router.push({ name: 'User', params: { id: userId } })
    },
    mailUser (email: string) {
      this.$router.push({ name: 'Mail', query: { email } })
    },
    search: debounce(async (term) => {
      await userRequest.search(term)
    }, 300),
    block (userId: string) {
      userRequest.block(userId)
    },
    unblock (userId: string) {
      userRequest.unblock(userId)
    }
  }
})
</script>
