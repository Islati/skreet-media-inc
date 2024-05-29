<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Badge} from "~/components/ui/badge";
import ArtistCard from "~/components/ArtistCard.vue";

const titles = [
  {main: 'Skreet', sub: 'Empire'},
  {main: 'Bold', sub: 'Unapologetic'},
  {main: "Creative", sub: "Defined"}
];

const currentTitle = ref(0);
const mainText = ref(titles[currentTitle.value].main);
const subText = ref(titles[currentTitle.value].sub);

const changeText = () => {
  currentTitle.value = (currentTitle.value + 1) % titles.length;
  mainText.value = titles[currentTitle.value].main;
  subText.value = titles[currentTitle.value].sub;
};

onMounted(() => {
  setInterval(changeText, 3000); // Change text every 3 seconds
});

</script>

<template>
  <div class="container flex flex-col mx-auto h-screen">
    <div class="flex flex-grow justify-center items-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold glitch" :key="mainText">{{ mainText }}</h1>
        <p class="text-lg glitch" :key="subText">{{ subText }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes glitch {
  0% {
    text-shadow: 2px 2px red, -2px -2px blue;
  }
  20% {
    text-shadow: -2px 2px red, 2px -2px blue;
  }
  40% {
    text-shadow: 2px -2px red, -2px 2px blue;
  }
  60% {
    text-shadow: -2px -2px red, 2px 2px blue;
  }
  80% {
    text-shadow: 2px 2px red, -2px -2px blue;
  }
  100% {
    text-shadow: -2px 2px red, 2px -2px blue;
  }
}

.glitch {
  animation: glitch 1s infinite;
  position: relative;
}
</style>
