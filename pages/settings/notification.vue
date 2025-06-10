<template>


          <div class="w-full flex flex-col items-start justify-start gap-y-8 sm:pr-10">

            <div class="flex flex-col gap-y-2 items-start">

              <h1 class="interSemiBold leading-none text-[16px] text-[#010109]">
                Notification
              </h1>
              <h4 class="text-[12px] whitespace-nowrap SansRegular text-[#686767]">
                Control notification settings  to suit your preferences
              </h4>

            </div>


            <div v-if="!showLoader" class="w-full flex flex-col items-start justify-start gap-y-6">

              <div class="w-full flex gap-2 items-center justify-between">
                <label
                  class="interSemiBold leading-none text-[15px] text-[#374151] select-none"
                  for="push"
                >
                  Enable  Push notification
                </label>

                <SwitchRoot
                  id="push"
                  @update:checked="updateEntry()"
                  v-model:checked="inputs.pushNotification"
                  class="w-[42px] h-[25px]  flex bg-[#D1D5DB] shadow-sm rounded-full relative data-[state=checked]:bg-[#FF5400] cursor-default"
                >
                  <SwitchThumb
                    class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
                  />
                </SwitchRoot>

              </div>

              <div class="w-full flex gap-2 items-center justify-between">
                <label
                  class="interSemiBold leading-none text-[15px] text-[#374151] select-none"
                  for="general"
                >
                  Turn on all notification
                </label>

                <SwitchRoot
                  id="general"
                  @update:checked="updateEntry()"
                  v-model:checked="inputs.allNotification"
                  class="w-[42px] h-[25px]  flex bg-[#D1D5DB] shadow-sm rounded-full relative data-[state=checked]:bg-[#FF5400] cursor-default"
                >
                  <SwitchThumb
                    class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
                  />
                </SwitchRoot>

              </div>


              <div class="w-full flex gap-2 items-center justify-between">
                <label
                  class="interSemiBold leading-none text-[15px] text-[#374151] select-none"
                  for="task"
                >
                  Receive notification for tasks
                </label>

                <SwitchRoot
                  id="task"
                  @update:checked="updateEntry()"
                  v-model:checked="inputs.taskNotification"
                  class="w-[42px] h-[25px]  flex bg-[#D1D5DB] shadow-sm rounded-full relative data-[state=checked]:bg-[#FF5400] cursor-default"
                >
                  <SwitchThumb
                    class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
                  />
                </SwitchRoot>

              </div>


              <div class="w-full flex gap-2 items-center justify-between">
                <label
                  class="interSemiBold leading-none text-[15px] text-[#374151] select-none"
                  for="invite"
                >
                  Receive notification for invites
                </label>

                <SwitchRoot
                  id="invite"
                  @update:checked="updateEntry()"
                  v-model:checked="inputs.inviteNotification"
                  class="w-[42px] h-[25px]  flex bg-[#D1D5DB] shadow-sm rounded-full relative data-[state=checked]:bg-[#FF5400] cursor-default"
                >
                  <SwitchThumb
                    class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
                  />
                </SwitchRoot>

              </div>


            </div>

            <div v-else role="status" class="w-full flex flex-col gap-y-4 animate-pulse">
                
                <div class="flex w-full gap-x-4">
                  <div class="h-10 bg-gray-200  dark:bg-gray-700 w-10 mb-4"></div>
                  <div class='flex flex-col'>
                    <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  </div>
                </div>

                <div class="flex w-full gap-x-4">
                  <div class="h-10 bg-gray-200  dark:bg-gray-700 w-10 mb-4"></div>
                  <div class='flex flex-col'>
                    <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  </div>
                </div>

                <div class="flex w-full gap-x-4">
                  <div class="h-10 bg-gray-200  dark:bg-gray-700 w-10 mb-4"></div>
                  <div class='flex flex-col'>
                    <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  </div>
                </div>

                
            </div>

          
          </div>


  </template>

  <script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner'
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { getNotificationSetup, updateNotificationSetup } = useAuthStore();

  const { loading, user, store, organisation } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  definePageMeta({
    layout: 'settings'
  })

  const showLoader = ref(false)

  const inputs = reactive({
    allNotification: false,
    inviteNotification:false,
    pushNotification: false,
    taskNotification: false
  })

  const updateEntry = async()=>{
    // showLoader.value = true
    const result = await updateNotificationSetup(inputs);
    console.log(result)
    if(result?.success){
      inputs.allNotification = result.notificationSetting.allNotification
      inputs.inviteNotification = result.notificationSetting.inviteNotification
      inputs.pushNotification = result.notificationSetting.pushNotification
      inputs.taskNotification = result.notificationSetting.taskNotification

      toast.success(result?.msg)
      // showLoader.value = false
    }else{
      toast.error(result?.msg)
      // showLoader.value = false
    }
  }

  // watch(inputs, async(newVal) => {
  //   showLoader.value = true
  //   const result = await updateNotificationSetup(inputs);
  //   console.log(result)
  //   if(result?.success){
  //     inputs.emailNotification = result.notificationSetting.emailNotification
  //     inputs.pushNotification = result.notificationSetting.pushNotification
  //     inputs.smsNotification = result.notificationSetting.smsNotification
  //     initToast(true,'Update Successful',result?.msg)
  //     showLoader.value = false
  //   }else{
  //     initToast(false,'Update failed',result?.msg)
  //     showLoader.value = false
  //   }
  // });

  onMounted(async()=>{
    showLoader.value = true
    const result = await getNotificationSetup();
    console.log(result)
    if(result?.success){
      inputs.allNotification = result.notificationSetting.allNotification
      inputs.inviteNotification = result.notificationSetting.inviteNotification
      inputs.pushNotification = result.notificationSetting.pushNotification
      inputs.taskNotification = result.notificationSetting.taskNotification
      showLoader.value = false
    }
    showLoader.value = false
    
  })
  
  </script>