<script setup lang="ts">
import {ref} from 'vue';
import {Separator} from "~/components/ui/separator";
import {Alert, AlertDescription, AlertTitle} from "~/components/ui/alert";

const form = ref({
  name: '',
  email: '',
  demoLink: '',
  message: ''
});

const submitDemo = () => {
  // Handle form submission logic
  alert('Demo submitted!');
};
</script>

<template>
  <div class="container mx-auto p-6 h-screen">
    <div class="text-center mb-8">
      <h1 class="text-5xl font-bold text-white mb-4">Submit Your Demo</h1>
      <div class="flex flex-col justify-center items-center">
        <Separator class="w-1/12 my-2"/>
        <p class="text-lg text-gray-50 px-12">
          If you've got what it takes, we want to hear from you.
        </p>
      </div>
    </div>

    <div class="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg text-black">
      <div class="text-center mb-6">
        <Alert variant="default" class="w-full border-2 bg-primary text-black">
          <Icon name="material-symbols:info" style="color: black;"/>
          <AlertTitle>Currently Closed</AlertTitle>
          <AlertDescription class="text-sm">
            We'll be opening demo submissions again, soon, so keep working.
          </AlertDescription>
        </Alert>
      </div>

      <div class="mb-6">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <Input v-model="form.name" id="name" type="text" placeholder="Your name" class="mt-1 block w-full"/>
      </div>

      <div class="mb-6">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <Input v-model="form.email" id="email" type="email" placeholder="Your email" class="mt-1 block w-full"/>
      </div>

      <div class="mb-6">
        <label for="demoLink" class="block text-sm font-medium text-gray-700">Demo Link</label>
        <Input v-model="form.demoLink" id="demoLink" type="url" placeholder="Link to your demo."
               class="mt-1 block w-full"/>
        <small class="text-xs text-gray-400 ml-2">SoundCloud or YouTube URL</small>
      </div>

      <div class="mb-6">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <Textarea v-model="form.message" id="message" placeholder="Tell us about yourself and your music"
                  class="mt-1 block w-full"></Textarea>
      </div>

      <div class="text-center">
        <Button variant="outline" @click="submitDemo" class="w-full py-3 text-white" disabled>
          <Icon name="material-symbols:send-rounded" class="mr-2" color="text-white"/>
          Submit Demo
        </Button>
      </div>
    </div>
  </div>
</template>
