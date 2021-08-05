<template lang="pug">
Content
  template(v-slot:content)
    .row
      .col-md-8
        form
          .form-group.row
            .col-sm-4
              label To
            .col-sm-12
              input.form-control(placeholder="All" v-model="mail.to")
              small.form-text.text-muted Enter email address or leave blank to send to all users
          .form-group.row
            .col-sm-4
              label Subject
            .col-sm-12
              input.form-control(v-model="mail.subject")
          .form-group.row.mb-4
            .col-sm-4
              label Message
            .col-sm-12
              textarea.form-control(rows="5" v-model="mail.message")
          .row
            .col-sm-12.offset-sm-4
              button.btn.btn-primary.px-3(@click.prevent="send()") Send
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty } from 'lodash'

import mailRequest from '../requests/mailRequest'

import Content from '@/components/Content.vue'

export default Vue.extend({
  components: {
    Content
  },

  data () {
    return {
      mail: {
        to: this.$route.query.email ? this.$route.query.email : '',
        subject: '',
        message: ''
      }
    }
  },

  methods: {
    clear () {
      this.mail = {
        to: this.$route.query.email ? this.$route.query.email : '',
        subject: '',
        message: ''
      }
    },
    async send () {
      const response = await mailRequest.send(this.mail)
      if (!isEmpty(response)) this.clear()
    }
  },

  beforeRouteUpdate (to, from, next) {
    this.mail.to = to.query.email
    next()
  }
})
</script>
