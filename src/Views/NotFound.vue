<!-- src/pages/NotFound.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
    <n-result
      status="404"
      title="404 Not Found"
      description="Sorry, the page you are looking for does not exist."
    >
      <template #footer>
        <n-button @click="$router.push('/')">Go to Home</n-button>
      </template>
    </n-result>
  </div>
</template>


<script setup>
import { NResult, NButton } from 'naive-ui'
</script>
