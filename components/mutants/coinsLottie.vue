<template>
  <div
    class="bg-white rounded-lg py-2 sm:px-4 flex flex-col items-center justify-center"
  >

    <client-only>
      <lottie-player
        src="/coins.json"
        autoplay
        loop
        style="width: 300px; height: 300px"
      ></lottie-player>
    </client-only>
  


  </div>
</template>

<script setup>
  const emits = defineEmits(['close'])
</script>
