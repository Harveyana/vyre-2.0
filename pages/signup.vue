<template>
  <div
    class="w-full sm:w-[450px] h-full bg-white rounded-xl"
  >
    <div class="w-full h-full rounded-xl">

      <!-- <Preference v-if="tab =='SELECT'" @update-value="(value:string)=>{tab = value}" /> -->

      <!-- <Individual /> -->
      <SignUpTab v-if="TAB =='SIGNUP'" @next="TAB = 'VERIFY'" />
      <VerifyToken  v-if="TAB =='VERIFY'" />

    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'auth'
})



const router = useRouter()
const route = useRoute();
const TAB = ref('SIGNUP');


// watch(tab.value, async(newtab, oldtab) => {
//     router.push({
//         path: '/signup',
//         query: { tab: newtab as string },
//     })
// })


</script>

<style>
* {
  font-family: "cabinetGrotesk", sans-serif;
}

.extraboldCabinet {
  font-family: "cabinetGroteskBold", sans-serif;
}

.blackCabinet {
  font-family: "cabinetGroteskBlack", sans-serif;
}
</style>
