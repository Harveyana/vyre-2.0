<template>
    <div class="w-full flex flex-col items-start justify-center gap-y-4 lg:pr-10">

       


      <Banks/>
        <!-- <FamilyTab v-if="tab ==='FAMILY'" /> -->


          
    </div>


  </template>

  <script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { updateProfile } = useAuthStore();

  const { loading, user, store } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  definePageMeta({
    layout: 'settings'
  })
  const tab = ref('PROFILE')
  

  // const inputs = reactive({
  //   photoUrl: user.value?.photoUrl ? user.value?.photoUrl :'',
  //   firstName: user.value?.firstName ? user.value?.firstName :'',
  //   lastName: user.value?.lastName ? user.value?.lastName :'',
  //   phoneNumber: user.value?.phoneNumber ? user.value?.phoneNumber : '',
  //   email: user.value?.email ? user.value?.email :''
  // })


  // const updateDetails = async(imageUrl?:string)=>{
  //   showLoader.value = true
  //   showUpload.value = false

  //   if(imageUrl)inputs.photoUrl = imageUrl
  //   console.log(inputs)
  //   const result = await updateProfile(inputs);

  //   console.log(result)
  //   if(result?.success){
  //     user.value = result?.user
  //     initToast(true,'Update Successful',result?.msg)
  //     showLoader.value = false
  //   }else{
  //     initToast(false,'Update failed',result?.msg)
  //     showLoader.value = false
  //   }

  // }
  
  </script>