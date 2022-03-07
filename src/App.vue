<script setup lang="ts">
  import { ref } from "vue";
  import HelloWorld from "./components/HelloWorld.vue";

  const show = ref(true);
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <HelloWorld :show="show" />
</template>
