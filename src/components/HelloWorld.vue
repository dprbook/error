<script setup lang="ts">
  // import { Presence, Motion } from "motion/vue";
  import { Presence, Motion } from "../@motionone/vue";

  const props = defineProps<{ show: boolean }>();
</script>

<!-- TEMPLATE -->
<template>
  <Presence>
    <Motion
      v-if="props.show"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
    >
      <div
        class="hello-world"
        :style="{
          'background-color': 'red',
          height: '5rem',
          width: '5rem',
          margin: '1rem',
        }"
      >
        hi there
      </div>
    </Motion>
  </Presence>
</template>
