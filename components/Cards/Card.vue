<template>
  <div class="overflow-hidden table-radius">
    <div
      class="px-6 py-4 text-dark dark:text-white white-mode backdrop-blur-[13px] dark:bg-whiteOpacity"
    >
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'CardComponent',
  };
</script>

<script setup lang="ts"></script>
