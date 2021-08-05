<template lang="pug">
.row
  .col-md-12.offset-md-2
    h5.font-weight-bold.text-center.mb-4 Comment
    Table
      template(v-slot:tbody)
        tr
          th ID
          td {{ comment.id }}
        tr
          th User ID
          td
            Route(
              name="User"
              :params="{ id: comment.user_id }"
            ) {{ comment.user_id }}
        tr
          th User
          td
            Route(
              name="User"
              :params="{ id: comment.user_id }"
            ) {{ comment.user.email }}
        tr
          th Post ID
          td
            Route(
              name="Post"
              :params="{ id: comment.post_id }"
            ) {{ comment.post_id }}
        tr
          th Content
          td {{ comment.content }}
        tr
          th Created at
          td
            Date(:time="comment.created_at")
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty } from 'lodash'

import Table from '../components/Table.vue'
import Date from '../components/Date.vue'
import Route from '../components/Route.vue'
import commentRequest from '../requests/commentRequest'
import commentState from '../state/commentState'

export default Vue.extend({
  components: {
    Table,
    Date,
    Route
  },

  async beforeRouteEnter (to, from, next) {
    const id = to.params.id
    const response = await commentRequest.comment(id)
    if (!isEmpty(response)) next()
  },

  computed: {
    comment () {
      return commentState.collectComment()
    }
  }
})
</script>

<style lang="sass" scoped>
@import '../sass/variables'

th
  background: $secondary
</style>
