<template>
  <div class="w-full rounded-lg bg-white sm:w-[540px] py-8">
      <div class="w-full flex flex-row ">
        <EmailForm v-if="TAB =='EMAIL'" @recovered="(user:{})=>{showVerify(user)}" />
        <Verify :email="user?.email || 'NON'" v-if="TAB =='VERIFY'" @verified="(id)=>{userVerified(id)}" />
        <CreatePassword v-if="TAB =='PASSWORD'" :userId="user?.id"  @passwordCreated="TAB = 'SUCCESS'" />
        <Congratulation v-if="TAB =='SUCCESS'" successMessage="Account Recovered Successfully" buttonText="Login To Dashboard" />
      </div>
  </div>
</template>

<script setup lang="ts" >
import { Toaster, toast } from 'vue-sonner'
// import { storeToRefs } from 'pinia';
// import { useAuthStore } from '~/store/auth';
// const { register_User } = useAuthStore();

// const { loading } = storeToRefs(useAuthStore());
const { $toast } = useNuxtApp()

const user = ref({})


definePageMeta({
  layout: 'auth'
})

const TAB = ref('EMAIL');

const showVerify = (userDetails:{})=>{
  user.value = userDetails
  TAB.value = 'VERIFY'
}

const userVerified = ()=>{
  TAB.value = 'PASSWORD'
}



</script>
