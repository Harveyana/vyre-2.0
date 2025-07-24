<template>
    <div class="w-full rounded-lg bg-white sm:w-[450px]">
      <div class="w-full flex flex-row ">
        <LoginTab v-if="TAB =='LOGIN'" @next="(userId:string)=>{showVerify(userId)}" />
        <TwoFactorTab  v-if="TAB =='VERIFY'" v-model:userId="userId" />
      </div>
    </div>
</template>

<script setup lang="ts">

import eye from "~/assets/img/Eye.png";
import eyeSlash from "~/assets/img/eye-slash.png";

definePageMeta({
  layout: 'auth'
})

const TAB = ref('LOGIN');
const userId = ref('')
// const email = ref("");

const showVerify = (value:string)=>{
  userId.value = value
  TAB.value = 'VERIFY'
}

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
