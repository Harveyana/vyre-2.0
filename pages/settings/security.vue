<template>

  <div class="w-full flex flex-col items-start justify-center">

        <div class="w-full flex flex-col gap-y-2 items-start">

          <h1 class="interSemiBold leading-none text-[16px] text-[#010109]">
            Security
          </h1>

          <h4 class="text-[12px] interRegular text-[#686767]">
            secure your account from intruders
          </h4>

          <TabsRoot
              default-value="PASSWORD"
              v-model="tab"
              class="w-full flex items-center justify-between border-b border-gray-200 mt-4"
            >
              <TabsList  class="flex items-center justify-start gap-x-6 relative py-1 " aria-label="PROFILE">

                <TabsIndicator class="absolute left-0 h-[3px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
                  <div class="bg-black dark:bg-white  w-full h-full" />
                </TabsIndicator>


                <TabsTrigger class="flex items-center justify-center gap-1.5 text-[#686767] dark:text-[#686767] data-[state=active]:text-black dark:data-[state=active]:text-white text-[14px]" value="PASSWORD">
                  Change Password
                </TabsTrigger>
                
                <TabsTrigger class="flex items-center justify-center gap-2 text-[#686767] dark:text-[#686767] data-[state=active]:text-black  dark:data-[state=active]:text-white  text-[14px]" value="2FA">
                  Two Factor Authentication
                </TabsTrigger>

              </TabsList>

          </TabsRoot>

        </div>

        <ChangePassWord v-if="tab == 'PASSWORD'" />
        <TwoFactor v-if="tab == '2FA'" />
    
  </div>




  </template>

  <script setup lang="ts">

    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '~/store/auth';
    const { set2Factor, get2Factor, disable2Factor } = useAuthStore();

    const { loading, user, store, organisation } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
    definePageMeta({
      layout: 'settings'
    })

    // const showLoader = ref(false)

    const tab = ref('PASSWORD')

    // enum
    // EMAIL_OTP
    // SMS_OTP
    // THIRD_PARTY_AUTHENTICATOR

    
  
  </script>