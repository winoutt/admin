<template lang="pug">
.row
  .col-md-12.offset-md-2
    h5.font-weight-bold.text-center.mb-4 Post
    Table
      template(v-slot:tbody)
        tr
          th ID
          td {{ post.id }}
        tr
          th Team
          td {{ post.team.name }}
        tr
          th User ID
          td
            Route(
              name="User"
              :params="{ id: post.user_id }"
            ) {{ post.user_id }}
        tr
          th User
          td
            Route(
              name="User"
              :params="{ id: post.user_id }"
            ) {{ post.user.email }}
        tr
          th Type
          td {{ util.post.type(post) }}
        tr
          th Caption
          td {{ post.caption }}
        template(v-if="!util.isEmpty(post.content)")
          tr
            th Content
            td(v-if="post.content.type === 'image'")
              img(:src="post.content.body")
            td(v-else-if="post.content.type === 'audio'")
              audio(controls)
                source(:src="post.content.body")
            td(v-else-if="post.content.type === 'video'")
              video.embed-responsive(controls)
                source(:src="post.content.body")
            td(v-else-if="post.content.type === 'document'")
              a(:href="post.content.body" download) {{ post.content.filename }}
            td(v-else-if="post.content.type === 'article'")
              a.cursor-pointer(@click.prevent="util.linkOpener(`${appUrl}/post/${post.id}`)") {{ `${appUrl}/post/${post.id}` }}
        tr(v-if="!util.isEmpty(post.album)")
          th Album
          td
            img.mr-2(v-for="photo in post.album" :src="photo.photo" :key="photo.id")
        tr(v-if="!util.isEmpty(post.poll)")
          th Poll
          td
            h6.font-weight-bold {{ post.poll.question }}
            ul
              li(v-for="choice in post.poll.choices" :key="choice.id") {{ choice.value }}
        tr
          th Created at
          td
            Date(:time="post.created_at")
        tr
          th Updated at
          td
            Date(:time="post.updated_at")
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty } from 'lodash'

import Table from '../components/Table.vue'
import Date from '../components/Date.vue'
import Route from '../components/Route.vue'
import postRequest from '../requests/postRequest'
import postState from '../state/postState'

export default Vue.extend({
  components: {
    Table,
    Date,
    Route
  },

  async beforeRouteEnter (to, from, next) {
    const id = to.params.id
    const response = await postRequest.post(id)
    if (!isEmpty(response)) next()
  },

  computed: {
    post () {
      return postState.collectPost()
    }
  },

  data () {
    return {
      appUrl: process.env.VUE_APP_MASTER_APP_URL
    }
  }
})
</script>

<style lang="sass" scoped>
@import '../sass/variables'

th
  background: $secondary

img
  width: 80px
  height: 80px
  object-fit: cover
</style>
