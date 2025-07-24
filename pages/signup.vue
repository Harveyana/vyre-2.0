<template>
  <div
    class="w-full sm:w-[450px] h-full bg-white rounded-xl"
  >
    <div class="w-full h-full rounded-xl">

      <!-- <Preference v-if="tab =='SELECT'" @update-value="(value:string)=>{tab = value}" /> -->

      <!-- <Individual /> -->
      <SignUpTab />

      <!-- <Business v-if="tab =='BUSINESS'" @back="tab = 'SELECT'" /> -->

    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'auth'
})



const router = useRouter()
const route = useRoute();
const tab = ref(route.query.tab ? route.query.tab : 'SELECT');


watch(tab.value, async(newtab, oldtab) => {
    router.push({
        path: '/signup',
        query: { tab: newtab as string },
    })
})


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
