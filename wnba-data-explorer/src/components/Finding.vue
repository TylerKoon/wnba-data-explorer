<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  alignment: {
    type: String,
    default: 'left' // Default alignment
  }
});
</script>

<template>
    <div className="card bg-white shadow-md p-4">
        <h3 className="text-xl font-bold">{{ title }}</h3>
        <p className="text-gray-700">{{ description }}</p>
    </div>
</template>