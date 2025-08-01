<script setup lang="ts">
import TableauDashboard from '../components/DashboardTableauContainer.vue';

defineProps({
  view: {
    type: String,
    required: true
  },
  tableauUrl: {
    type: String,
    required: true
  }
});
</script>

<template>
    <TableauDashboard :tableauUrl="tableauUrl" />
</template>