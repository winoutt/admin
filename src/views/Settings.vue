<template lang="pug">
Content
  template(v-slot:content)
    .row
      .col-md-4
        h6.font-weight-bold.mb-3 Change passwrod
        form
          .form-group
            input.form-control(type="password" placeholder="Current" v-model="password.currentPassword")
          .form-group.mb-4
            input.form-control(type="password" placeholder="New" v-model="password.newPassword")
          button.btn.btn-primary.px-3(@click.prevent="update()") Update
</template>

<script lang="ts">
import Vue from 'vue'
import { isEmpty } from 'lodash'

import adminRequest from '../requests/adminRequest'

import Content from '@/components/Content.vue'

export default Vue.extend({
  components: {
    Content
  },

  data () {
    return {
      password: {
        currentPassword: '',
        newPassword: ''
      }
    }
  },

  methods: {
    clear () {
      this.password = {
        currentPassword: '',
        newPassword: ''
      }
    },
    async update () {
      const response = await adminRequest.passwordUpdate(this.password)
      if (!isEmpty(response)) this.clear()
    }
  }
})
</script>
