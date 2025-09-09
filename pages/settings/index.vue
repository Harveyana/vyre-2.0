<template>
    <div class="w-full h-[80vh] bg-gradient-to-b from-bg-white/60 to-bg-white/70 sm:h-[85vh] flex flex-col items-start justify-start gap-y-4 px-3 lg:px-10">

        <div class="w-full flex flex-col gap-y-2 items-start">

            <h1 class="interSemiBold leading-none text-[16px] text-[#010109]">
              Account
            </h1>

            <h4 class="text-[12px] interRegular text-[#686767]">
              Manage Account preferences and profile 
            </h4>


            <TabsRoot
              default-value="PROFILE"
              v-model="tab"
              class="w-full flex items-center justify-between border-b border-gray-200 mt-4"
            >
              <TabsList  class="flex items-center justify-start gap-x-6 relative py-1 " aria-label="PROFILE">

                <TabsIndicator class="absolute left-0 h-[3px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
                  <div class="bg-black w-full h-full" />
                </TabsIndicator>


                <TabsTrigger class="flex items-center justify-center gap-1.5 text-[#686767] data-[state=active]:text-black text-[14px]" value="PROFILE">
                  About You
                </TabsTrigger>
                
                <TabsTrigger class="flex items-center justify-center gap-2 text-[#686767] data-[state=active]:text-black text-[14px]" value="ACCOUNTS">
                  Payment Accounts
                </TabsTrigger>

              </TabsList>

            </TabsRoot>



        </div>


        <ProfileTab v-if="tab ==='PROFILE'" />
        <PaymentAccounts v-if="tab ==='ACCOUNTS'" />


          
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