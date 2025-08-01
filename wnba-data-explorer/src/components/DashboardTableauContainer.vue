<script setup>
import { onMounted, useTemplateRef } from 'vue';

const props = defineProps({
  tableauUrl: {
    type: String,
    required: true
  }
});

console.log(props.tableauUrl)
</script>

<template>
  <div id="dashboard" class="flex h-screen">
    <tableau-viz id="tableauViz"       
      :src="props.tableauUrl"     
      toolbar="bottom" hide-tabs>
    </tableau-viz>
  </div>
</template>