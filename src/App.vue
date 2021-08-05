<template>
  <div id="app" class="h-100">
    <div id="progress"></div>
    <Panel v-if="isAuthPage">
      <router-view/>
    </Panel>
    <router-view v-else/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Panel from './components/Panel.vue'
import progress from './services/progress'

export default Vue.extend({
  components: {
    Panel
  },

  computed: {
    isAuthPage () {
      return this.$route.meta.auth
    }
  },

  methods: {
    initProgress () {
      progress.initialize()
    }
  },

  mounted () {
    this.initProgress()
  }
})
</script>

<style lang="sass">
@import './sass/app'

#progress
  width: 100%
  height: 3px
  position: fixed
  top: 0
  z-index: 1055
</style>
