<template lang="pug">
Content
  template(v-slot:search)
    Search(v-model="term" @input="search(term)")
  template(v-slot:content)
    .comments
      .row
        .col
          Table
            template(v-slot:thead)
              th Id
              th User
              th.no-wrap Created at
              th Actions
            template(v-slot:tbody)
              tr(v-for="comment in comments")
                td.no-wrap {{ comment.id }}
                td
                  Route(
                    name="User"
                    :params="{ id: comment.user.id }"
                  ) {{ comment.user.email }}
                td
                  Date(:time="comment.created_at")
                td
                  .actions.d-flex
                    Icon.cursor-pointer.mr-2(
                      name="eye"
                      tooltip="View"
                      @click.native="viewComment(comment.id)"
                    )
                    Icon.cursor-pointer(
                      name="trash"
                      tooltip="Delete"
                      @click.native="remove(comment.id)"
                    )
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty, debounce } from 'lodash'

import commentRequest from '../requests/commentRequest'
import commentState from '../state/commentState'

import Content from '@/components/Content.vue'
import Table from '../components/Table.vue'
import Icon from '../components/Icon.vue'
import Date from '../components/Date.vue'
import Search from '@/components/Search.vue'
import Route from '../components/Route.vue'

export default Vue.extend({
  components: {
    Content,
    Table,
    Icon,
    Date,
    Search,
    Route
  },

  async beforeRouteEnter (to, from, next) {
    const response = await commentRequest.comments()
    if (!isEmpty(response)) next()
  },

  computed: {
    comments () {
      return commentState.collectComments()
    }
  },

  data () {
    return {
      term: ''
    }
  },

  methods: {
    viewComment (comentId: string) {
      this.$router.push({ name: 'Comment', params: { id: comentId } })
    },
    search: debounce(async (term) => {
      await commentRequest.search(term)
    }, 300),
    remove (id: string) {
      commentRequest.delete(id)
    }
  }
})
</script>
