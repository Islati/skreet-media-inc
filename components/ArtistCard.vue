<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

import { ref, onMounted } from 'vue';

interface ArtistData {
  name: string,
  location: string,
  img: string,
  link: string,
  footerTags: {
    text: string,
    classes: string
  }[]
}

const props = defineProps<{
  artist: ArtistData
}>();
</script>

<template>
  <Card class="max-w-sm mx-auto my-4">
    <CardHeader class="text-center">
      <CardTitle class="text-2xl text-foreground">
        <a :href="artist.link" target="_blank">{{artist.name}}</a>
      </CardTitle>
      <CardDescription>{{ artist.location }}</CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <NuxtImg :src="artist.img" :alt="artist.name" class="w-80 h-60 object-cover"/>
    </CardContent>
    <CardFooter class="border-t h-8 flex justify-center py-4">
      <div class="flex justify-center space-x-2">
        <Badge v-for="tag in artist.footerTags" :key="tag.text" variant="outline" :class="tag.classes" class="mx-2 text-center text-xs">{{ tag.text }}</Badge>
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped>
/* Custom styles if necessary */
</style>
