<script setup lang="ts">
</script>

<template>
  <div class="container flex flex-col">
    <div class="flex flex-col flex-grow justify-center items-center">
      <h1 class="text-3xl">About</h1>
      <p class="animate-pulse">We are a culture collective.</p>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse {
  animation: pulse 4.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .9;
    }
  }
}
</style>
