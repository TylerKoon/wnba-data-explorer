<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actionRoute: {
    type: String,
    default: ""
  }
});


</script>

<template>
    <div className="card bg-card shadow-md p-6 max-w-84 min-h-84">
        <figure className="card-image h-full">
            <v-icon :name="icon" scale="6" class="text-gray-600" />
        </figure>
        <div className="card-body p-1">
            <h3 className="card-title">{{ title }}</h3>
            <p className="card-description">{{ description }}</p>
            <div className="card-actions justify-center pt-4">
                <router-link :to="actionRoute" className="btn btn-primary w-full">Go to Dashboard</router-link>
            </div>
        </div>

    </div>
</template>