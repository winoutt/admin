<template lang="pug">
Content
  template(v-slot:search)
    Search(v-model="term" @input="search(term)")
  template(v-slot:content)
    .posts
      .row
        .col
          Table
            template(v-slot:thead)
              th ID
              th Type
              th User
              th.no-wrap Created at
              th Actions
            template(v-slot:tbody)
              tr(v-for="post in posts")
                td.no-wrap {{ post.id }}
                td {{ util.post.type(post) }}
                td
                  Route(
                    name="User"
                    :params="{ id: post.user.id }"
                  ) {{ post.user.email }}
                td
                  Date(:time="post.created_at")
                td
                  .actions.d-flex
                    Icon.cursor-pointer.mr-2(
                      name="eye"
                      tooltip="View"
                      @click.native="viewPost(post.id)"
                    )
                    Icon.cursor-pointer(
                      name="trash"
                      tooltip="Delete"
                      @click.native="remove(post.id)"
                    )
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty, debounce } from 'lodash'

import postRequest from '../requests/postRequest'
import postState from '../state/postState'

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

  data () {
    return {
      term: ''
    }
  },

  async beforeRouteEnter (to, from, next) {
    const response = await postRequest.posts()
    if (!isEmpty(response)) next()
  },

  computed: {
    posts () {
      return postState.collectPosts()
    }
  },

  methods: {
    viewPost (postId: string) {
      this.$router.push({ name: 'Post', params: { id: postId } })
    },
    search: debounce(async (term) => {
      await postRequest.search(term)
    }, 300),
    remove (id: string) {
      postRequest.delete(id)
    }
  }
})
</script>
