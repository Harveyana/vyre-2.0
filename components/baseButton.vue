<template>
    <button
      class="text-[12px] text-center rounded-lg transition duration-300"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </button>
  </template>

  <script setup lang="ts">
  
  </script>