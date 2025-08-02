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
    <div className="card bg-base-200 shadow-lg p-12">
        <h2 className="text-2xl font-bold text-gray-300 mb-6">{{ title }}</h2>
        <div className="min-h-128">
            <p className="text-base-content mb-4">{{ description }}</p>
        </div>
        
    </div>
</template>