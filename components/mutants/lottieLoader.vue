<template>
  <div
    class="bg-white border rounded-full shadow-md p-4 flex flex-col items-center justify-center"
  >

    <client-only>
      <lottie-player
        src="/lottie.json"
        autoplay
        loop
        style="width: 100px; height: 100px"
      ></lottie-player>
    </client-only>
  


  </div>
</template>

<script setup>
  const emits = defineEmits(['close'])
</script>
