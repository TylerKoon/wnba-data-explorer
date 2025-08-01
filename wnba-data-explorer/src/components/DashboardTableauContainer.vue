<script setup>
import { onMounted, useTemplateRef } from 'vue';

const props = defineProps({
  tableauUrl: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div id="dashboard" class="flex h-screen">
    <tableau-viz id="tableauViz"       
      :src="props.tableauUrl"     
      toolbar="bottom" hide-tabs>
    </tableau-viz>
  </div>
</template>