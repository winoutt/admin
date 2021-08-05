<template lang="pug">
  .container
    .sign-in.row.align-items-center
      .col-md-8.offset-md-4
        .row
          .col-md-10.offset-md-3
            .card.bg-grey-dark
              .card-body.text-center
                Logo.mb-4
                form
                  .form-group
                    input.form-control(placeholder="Email" type="email" v-model="user.email")
                  .form-group.mb-4
                    input.form-control(placeholder="Password" type="password" v-model="user.password")
                  button.btn.btn-block.btn-primary(@click.prevent="signIn()") Sign In
</template>

<script>
import Logo from '../components/logo/Logo'
import authRequest from '../requests/authRequest'

export default {
  components: {
    Logo
  },

  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    signIn () {
      authRequest.login(this.user)
    }
  },

  async beforeRouteEnter (to, from, next) {
    next()
    await authRequest.check()
  }
}
</script>

<style lang="sass" scoped>
.sign-in
  height: 100vh
</style>
