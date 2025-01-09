<template>
  <div
    class="bg-white w-full h-full rounded-lg py-10 sm:px-4 flex flex-col gap-y-8"
  >
    <div class="space-y-3 text-center">
      <span class="flex justify-center items-center gap-x-2">
        <p class="Grotesque-Regular text-[16px] text-[#737373]">Hooray!</p>
        <img src="~/assets/img/hooray-emoji.png" alt="hooray emoji" />
      </span>
      <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A] mt-1">
        {{ successMessage }}
      </h3>
    </div>

    <img
      src="~/assets/img/verifield-check.png"
      alt="verified check"
      class="my-2 w-24 sm:w-40 mx-auto"
    />

    <NuxtLink to="/login">
      <button class="w-full py-2.5 bg-black text-white rounded-lg">
        {{ buttonText }}
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  successMessage: {
    type: String,
  },
  buttonText: {
    type: String,
  },
});
</script>
