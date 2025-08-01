<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/24/solid'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});


</script>

<template>
    <div className="card bg-card shadow-md p-6 max-w-64 min-h-64">
        <figure className="card-image max-h-32">
            <!-- <img :src="icon" alt="" className="w-full h-32 object-cover mb-4" /> -->
            <slot name="figure"></slot>
        </figure>
        <div className="card-header">
            <h3 className="card-title">{{ title }}</h3>
            <p className="card-description">{{ description }}</p>
        </div>
    </div>
</template>