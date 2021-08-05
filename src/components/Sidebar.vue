<template lang="pug">
.sidebar.sticky-top.py-3
  Logo
  ul.menu.mt-3.mb-0.pl-0.cursor-pointer
    MenuItem(text="Dashboard" router="Dashboard")
    MenuItem(text="Reportings" router="Reportings" @click.native="markReportingsSeen()")
    MenuItem(text="Users" router="Users")
    MenuItem(text="Posts" router="Posts")
    MenuItem(text="Comments" router="Comments")
    MenuItem(text="Mail" router="Mail")
    MenuItem(text="Settings" router="Settings")
</template>

<script lang="ts">
import Vue from 'vue'

import Logo from './logo/Logo.vue'
import MenuItem from './MenuItem.vue'
import reportingState from '../state/reportingState'

export default Vue.extend({
  components: {
    Logo,
    MenuItem
  },

  methods: {
    markReportingsSeen () {
      reportingState.markReportingsSeen()
    }
  }
})
</script>

<style lang="sass" scoped>
.menu
  list-style: none
</style>
