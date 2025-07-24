<!-- src/pages/NotAuthorized.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
    <n-result
      status="403"
      title="403 Forbidden"
      description="You are not authorized to access this page."
    >
      <template #footer>
        <n-button @click="$router.push('/')">Go Home</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { NResult, NButton } from 'naive-ui'
</script>
