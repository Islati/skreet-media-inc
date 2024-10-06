<script setup lang="ts">
import {ref, onMounted} from 'vue';

useHead({
  title: 'Skreet - Artists',
  meta: [
    {
      name: 'description',
      content: 'The artists of Skreet Media Inc.'
    }
  ]
})


const artists = ref([
  {
    name: 'Islati',
    location: "Nova Scotia, Canada",
    img: '/img/islati.webp',
    link: 'https://www.youtube.com/@Islati',
    footerTags: [
      {
        text: 'Rapper',
        classes: 'text-red-300'
      },
      {
        text: 'Producer',
        classes: 'text-blue-300'
      },
      {
        text: 'DJ',
        classes: 'text-cyan-300'
      },
      {
        text: 'Director',
        classes: 'text-white-200'
      }
    ]
  },
  {
    name: "James Purcell",
    location: "Nova Scotia, Canada",
    img: "/img/james-panacea-diving.jpeg",
    link: "https://www.skreet.ca",
    footerTags: [
      {
        text: 'Vocalist',
        classes: 'text-green-300'
      },
      {
        text: 'Musician',
        classes: 'text-orange-300'
      }
    ],
  },
  {
    name: "Trill McKnight",
    location: "South Africa",
    img: "/img/trill-mcknight.webp",
    link: "https://www.instagram.com/trill47mcknight/",
    footerTags: [
      {
        text: "Rapper",
        classes: "text-red-300"
      }
    ]
  },

]);
</script>

<template>
  <div class="container mx-auto p-4 h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
      <ArtistCard v-for="artist in artists" :key="artist.name" :artist="artist"/>
    </div>
  </div>
</template>

<style scoped>

</style>