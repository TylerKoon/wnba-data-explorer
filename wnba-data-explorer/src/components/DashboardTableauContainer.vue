<script setup>
defineProps({
  tableauUrl: {
    type: String,
    required: true
  }
});
</script>

<template>
  <!-- TODO: Maybe add a loading spinner and error page -->
  <div class="flex h-screen">
    <tableau-viz id="tableauViz"       
      src=":tableauUrl"     
      toolbar="bottom" hide-tabs>
    </tableau-viz>
  </div>
</template>