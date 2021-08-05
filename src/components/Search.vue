<template lang="pug">
  input.form-control.w-25(v-if="canShow" placeholder="Search" v-model="term" @input="search()")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      term: ''
    }
  },
  computed: {
    canShow () {
      return this.$route.meta.canSearch
    }
  },
  methods: {
    search () {
      this.$emit('input', this.term)
    }
  }
})
</script>
