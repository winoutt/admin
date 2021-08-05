<template lang="pug">
  .dashboard-counts.row.mb-2
    .col-md-4.mb-3(v-for="count in counts")
      Count(:count="count")
</template>

<script lang="ts">
import Vue from 'vue'
import Count from '../../Count.vue'
import analyticsState from '../../../state/analyticsState'
import util from '../../../services/util'

export default Vue.extend({
  components: {
    Count
  },

  computed: {
    counts () {
      const counts = analyticsState.collectCounts()
      return [
        { type: 'Users', count: counts.users.count, icon: 'people' },
        {
          type: 'Male',
          count: counts.users.males,
          percentage: util.percentage(counts.users.males, counts.users.count),
          icon: 'male'
        },
        {
          type: 'Female',
          count: counts.users.females,
          percentage: util.percentage(counts.users.females, counts.users.count),
          icon: 'female'
        },
        { type: 'Posts', count: counts.posts.count, icon: 'clipboard' },
        {
          type: 'Online',
          count: counts.users.online,
          percentage: util.percentage(counts.users.online, counts.users.count),
          icon: 'globe'
        },
        {
          type: 'Banned',
          count: counts.users.banned,
          percentage: util.percentage(counts.users.banned, counts.users.count),
          icon: 'close-alt'
        },
        { type: 'Comments', count: counts.comments, icon: 'chat' },
        { type: 'Messages', count: counts.messages, icon: 'conversation' },
        { type: 'Teams', count: counts.teams, icon: 'window' },
        { type: 'Hashtags', count: counts.hashtags, icon: 'hashtag' },
        { type: 'Chats', count: counts.chats, icon: 'conversation' },
        { type: 'Chat archives', count: counts.chatArchives, icon: 'archive' },
        { type: 'Comment hashtags', count: counts.commentHashtags, icon: 'hashtag' },
        { type: 'Comment mentions', count: counts.commentMentions, icon: 'tag' },
        { type: 'Author star views', count: counts.authorStarViews, icon: 'star' },
        { type: 'Comment votes', count: counts.commentVotes, icon: 'up' },
        { type: 'Connections', count: counts.connections, icon: 'connections' },
        { type: 'Favorites', count: counts.favorites, icon: 'favorite' },
        { type: 'Last messages', count: counts.lastMessages, icon: 'last-message' },
        { type: 'Link previews', count: counts.linkPreviews, icon: 'link' },
        { type: 'Notes', count: counts.notes, icon: 'note' },
        { type: 'Notifications', count: counts.notifications, icon: 'bell' },
        { type: 'Poll choices', count: counts.pollChoices, icon: 'accept' },
        { type: 'Poll votes', count: counts.pollVotes, icon: 'up' },
        {
          type: 'Post polls',
          count: counts.posts.polls,
          percentage: util.percentage(counts.posts.polls, counts.posts.count),
          icon: 'poll'
        },
        { type: 'Post album photos', count: counts.postAlbumPhotos, icon: 'photos' },
        {
          type: 'Post albums',
          count: counts.posts.albums,
          percentage: util.percentage(counts.posts.albums, counts.posts.count),
          icon: 'photos'
        },
        {
          type: 'Post images',
          count: counts.posts.images,
          percentage: util.percentage(counts.posts.images, counts.posts.count),
          icon: 'photo'
        },
        {
          type: 'Post articles',
          count: counts.posts.articles,
          percentage: util.percentage(counts.posts.articles, counts.posts.count),
          icon: 'writing'
        },
        {
          type: 'Post audios',
          count: counts.posts.audios,
          percentage: util.percentage(counts.posts.audios, counts.posts.count),
          icon: 'music'
        },
        {
          type: 'Post documents',
          count: counts.posts.documents,
          percentage: util.percentage(counts.posts.documents, counts.posts.count),
          icon: 'file'
        },
        {
          type: 'Post texts',
          count: counts.posts.texts,
          percentage: util.percentage(counts.posts.texts, counts.posts.count),
          icon: 'clipboard'
        },
        {
          type: 'Post videos',
          count: counts.posts.videos,
          percentage: util.percentage(counts.posts.videos, counts.posts.count),
          icon: 'video'
        },
        { type: 'Post hashtags', count: counts.postHashtags, icon: 'hashtag' },
        { type: 'Post mentions', count: counts.postMentions, icon: 'tag' },
        { type: 'Post unfollows', count: counts.postUnfollows, icon: 'eye-off' },
        { type: 'Reportings', count: counts.reportings.count, icon: 'flag' },
        {
          type: 'Reportings users',
          count: counts.reportings.users,
          percentage: util.percentage(counts.reportings.users, counts.reportings.count),
          icon: 'people'
        },
        {
          type: 'Reportings posts',
          count: counts.reportings.posts,
          percentage: util.percentage(counts.reportings.posts, counts.reportings.count),
          icon: 'clipboard'
        },
        {
          type: 'Reportings comments',
          count: counts.reportings.comments,
          percentage: util.percentage(counts.reportings.comments, counts.reportings.count),
          icon: 'chat'
        },
        { type: 'Stars', count: counts.stars, icon: 'star' },
        { type: 'Unfollows', count: counts.unfollows, icon: 'user-remove' },
        { type: 'Websites', count: counts.websites.count, icon: 'globe' },
        { type: 'Websites company', count: counts.websites.company, icon: 'building' },
        { type: 'Websites personal', count: counts.websites.personal, icon: 'user' }
      ]
    }
  }
})
</script>
