<script setup lang="ts">
import {cn} from '@/lib/utils'
import {Avatar} from "~/components/ui/avatar";
import {useRouter, useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();

const isActive = (path: any) => {
  return route.path === path ? 'bg-muted text-white' : '';
};
</script>

<template>
  <div :class="cn('pb-12', $attrs.class ?? '')" class="border-r flex flex-col">
    <div class="space-y-4 py-4 flex flex-col">
      <div class="px-3 py-2 flex flex-col">
        <nuxt-img src="/img/logo.png" alt="Skreet Media Inc." class="w-96 rounded invert"/>
      </div>
      <div class="flex flex-col space-y-1">
        <Button :class="`${isActive('/')}` + ' w-full justify-start'" variant="ghost"
                @click="router.push({ path: '/' })">
          <Icon name="material-symbols:play-circle-outline" color="text-foreground" class="mr-2"/>
          Homepage
        </Button>
        <Button :class="`${isActive('/artists')}` + ' w-full justify-start'" variant="ghost"
                @click="router.push({ path: '/artists' })">
          <Icon name="material-symbols:artist" color="text-foreground" class="mr-2"/>
          Artists
        </Button>
        <Button variant="ghost" class="w-full justify-start"
                :class="`${isActive('/demo-submissions')}` + ' w-full justify-start'"
                @click="router.push({ path: '/demo-submissions' })">
          <Icon name="material-symbols:send-rounded" color="text-foreground" class="mr-2"/>
          Demo Submissions
        </Button>
        <Button variant="ghost" class="w-full justify-start" :class="`${isActive('/about')}` + ' w-full justify-start'"
                @click="router.push({ path: '/about' })">
          <Icon name="material-symbols:radio" color="text-foreground" class="mr-2"/>
          About
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles if necessary */
</style>
