<template>
  <div
    class="bg-white w-full h-full rounded-lg py-10 sm:px-4 flex flex-col items-center justify-center gap-y-8"
  >
    <div class="space-y-3 text-center">
      <span class="flex justify-center items-center gap-x-2">
        <p class="Grotesque-Regular text-[16px] text-[#737373]">uh oh!</p>
        <img src="~/assets/img/hooray-emoji.png" alt="hooray emoji" />
      </span>
      <h3 class="Grotesque-Bold text-[28px] text-[#1A1A1A] mt-1">
        Payment failed
      </h3>
    </div>

    <svg class="w-40 h-40" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff8865" d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12S6.477 2 12 2m.002 13.004a.999.999 0 1 0 0 1.997a.999.999 0 0 0 0-1.997M12 7a1 1 0 0 0-.993.884L11 8l.002 5.001l.007.117a1 1 0 0 0 1.986 0l.007-.117L13 8l-.007-.117A1 1 0 0 0 12 7"/></svg>

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
