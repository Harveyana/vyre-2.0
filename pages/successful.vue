<template>
  <div
    class="bg-white w-full h-full rounded-lg py-10 sm:px-4 flex flex-col items-center justify-center gap-y-8"
  >
    <div class="space-y-3 text-center">
      <span class="flex justify-center items-center gap-x-2">
        <p class="Grotesque-Regular text-[16px] text-[#737373]">Hooray!</p>
        <img src="~/assets/img/hooray-emoji.png" alt="hooray emoji" />
      </span>
      <h3 class="Grotesque-Bold text-[28px] text-[#1A1A1A] mt-1">
        Payment Successful
      </h3>
    </div>

    <img
      src="~/assets/img/verifield-check.png"
      alt="verified check"
      class="my-2 w-24 sm:w-36 mx-auto"
    />

    <NuxtLink class="w-full flex items-center justify-center" to="/wallets">
      <button class="w-[80%] py-2.5 bg-black text-white rounded-lg">
        Close
      </button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'operation'
})



const router = useRouter()
const route = useRoute();
const tab = ref(route.query.tab ? route.query.tab : 'SELECT');


// watch(tab.value, async(newtab, oldtab) => {
//     router.push({
//         path: '/signup',
//         query: { tab: newtab as string },
//     })
// })


</script>

<style>

</style>
