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
    <div className="card bg-card shadow-md p-6">
        <h3 className="text-xl font-bold">{{ title }}</h3>
        <div className="min-h-128">
            <p className="text-gray-600 mb-4">{{ description }}</p>
        </div>
        
    </div>
</template>