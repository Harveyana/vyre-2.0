<template>
  <div
    class="bg-white w-full h-full rounded-lg py-10 sm:px-4 flex flex-col gap-y-8"
  >
    <div class="space-y-1 text-center">
      
      <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A] mt-1">
        KYC Verification in Progress
      </h3>
      
      <span class="flex justify-center items-center gap-x-2">
        <p class="Grotesque-Regular text-[13px] text-[#737373]">Thank you for completing your identity verification steps. While we process your documents, you may proceed to log in</p>
      </span>
    </div>

    <img
      src="~/assets/img/icons/kyc.png"
      alt="verified check"
      class="my-2 w-24 sm:w-40 mx-auto"
    />
    <p class="Grotesque-Regular text-[14px] text-[#737373]">
        We’ll notify you via email once verification is complete (typically within an hour)
    </p>

    <NuxtLink to="/login" @click="$emit('close')" class="flex flex-col items-center justify-center gap-y-2">
      <h2 class="w-full py-2.5 bg-black text-white text-center rounded-3xl">
        Login To Dashboard
      </h2>
    </NuxtLink>

  </div>
</template>

<script setup>

  const emits = defineEmits(['close'])

</script>
