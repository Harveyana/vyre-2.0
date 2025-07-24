<template>
  <div
    class="w-fit h-[80vh] rounded-xl flex items-center justify-center "
  >
    <div class="w-full bg-white flex items-center justify-center h-fit rounded-xl px-4 sm:px-8 py-6 overflow-y-auto">

      <div class="h-full flex flex-col items-center justify-center gap-3 text-center">
        <LottieLoader />

        <h3 class="Grotesque-Regular text-[20px] text-[#1A1A1A]">
          wait a minute...
        </h3>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'operation'
})


const { $auth } = useNuxtApp()

const router = useRouter()




onMounted(async()=>{
  try {
    // const user = await $auth.client.getUser()
    // console.log('user', user)

    await $auth.client.handleRedirectCallback()
    const target = $auth.client.appState?.target || '/';
    navigateTo(target);
    // router.push('/')
  } catch (e) {
    console.error(e)
    navigateTo('/login?error=auth_failed');
  }
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
