<script setup lang="ts">
import { ref, onMounted } from 'vue';


const artists = ref([
  {
    name: 'Smoke Hash',
    location: 'California, USA',
    img: '/img/smoke-hash-peru.jpeg',
    link: 'https://www.youtube.com/@smokehashxuriahjahvid',
    footerTags: [
      {
        text: 'Producer',
        classes: 'text-blue-300'
      },
      {
        text: 'Rapper',
        classes: 'text-red-300'
      },
    ]
  },
  {
    name: 'Islati',
    location: "Nova Scotia, Canada",
    img: '/img/islati-camping.png',
    link: 'https://www.youtube.com/@Islati',
    footerTags: [
      {
        text: 'DJ',
        classes: 'text-cyan-300'
      },
      {
        text: 'Producer',
        classes: 'text-blue-300'
      },
      {
        text: 'Rapper',
        classes: 'text-red-300'
      }
    ]
  },
  {
    name: "James Panacea",
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
    name: "Torza",
    location: "Ontario, Canada",
    img: "/img/torza-closeup.jpeg",
    link: "https://www.skreet.ca",
    footerTags: [
      {
        text: 'Vocalist',
        classes: 'text-green-300'
      }
    ]
  }
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