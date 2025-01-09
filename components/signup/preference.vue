<template>
    <div class="w-full bg-white  rounded-xl">

      <!-- <div class="w-full flex justify-between items-center mb-4">
        <button
          @click="previousStep"
          class="flex items-center justify-center bg-none text-[16px] Grotesque-Regular text-[#737373]"
        >
          <img src="~/assets/img/left-arrow.png" alt="" />
          <p>Back</p>
        </button>
        <button
          class="bg-[#F1F0FE] py-1 px-3 text-[#0050A8] text-xs rounded-md"
        >
          {{ currentStep === 1 ? "choose one" : `Step ${currentStep} / 7` }}
        </button>
      </div> -->

      <div class="w-full">
        <div class="w-full flex items-start">

          <div class="w-full flex flex-col">

            <p class="Grotesque-Regular text-[16px] text-[#737373]">
              Let’s get to know you
            </p>
            <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
              Choose Your Preference
            </h3>

          </div>

          <button
           class="bg-[#F1F0FE] py-2 px-4 text-black text-xs rounded-md whitespace-nowrap"
          >
            choose one
          </button>



        </div>
        
        

        <div class="flex flex-col w-full h-full gap-y-6 my-4">

          <!-- Personal -->
          <div
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="AccountType = 'INDIVIDUAL'"
            :class="
              AccountType === 'INDIVIDUAL'
                ? 'border-black'
                : ' border-[#F8F8FC]'
            "
          >
            
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#F1F0FE"/>
              <g clip-path="url(#clip0_1189_1728)">
              <path d="M14 13C14 14.0609 14.4214 15.0783 15.1716 15.8284C15.9217 16.5786 16.9391 17 18 17C19.0609 17 20.0783 16.5786 20.8284 15.8284C21.5786 15.0783 22 14.0609 22 13C22 11.9391 21.5786 10.9217 20.8284 10.1716C20.0783 9.42143 19.0609 9 18 9C16.9391 9 15.9217 9.42143 15.1716 10.1716C14.4214 10.9217 14 11.9391 14 13Z" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 27V25C12 23.9391 12.4214 22.9217 13.1716 22.1716C13.9217 21.4214 14.9391 21 16 21H20C21.0609 21 22.0783 21.4214 22.8284 22.1716C23.5786 22.9217 24 23.9391 24 25V27" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1189_1728">
              <rect width="24" height="24" fill="white" transform="translate(6 6)"/>
              </clipPath>
              </defs>
            </svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                Individual User
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                I’m using the app for personal needs
              </p>
            </div>
          </div>


          <!-- Business -->
          <div
            class="w-full border hover:border-black flex items-center justify-start gap-x-5 py-4 bg-white rounded-lg border-[1px] px-4 cursor-pointer"
            @click="AccountType = 'BUSINESS'"
            :class="
              AccountType === 'BUSINESS' ? 'border-black' : ' border-[#F8F8FC]'
            "
          >
          
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#F1F0FE"/>
              <g clip-path="url(#clip0_1189_1736)">
              <path d="M11.25 24.75V15L18 12L24.75 15V24.75" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 18.75H21.75V24.75H14.25V20.25H18.75" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.75 24.75V18C18.75 17.8011 18.671 17.6103 18.5303 17.4697C18.3897 17.329 18.1989 17.25 18 17.25H16.5C16.3011 17.25 16.1103 17.329 15.9697 17.4697C15.829 17.6103 15.75 17.8011 15.75 18V20.25" stroke="#0050A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1189_1736">
              <rect width="18" height="18" fill="white" transform="translate(9 9)"/>
              </clipPath>
              </defs>
            </svg>
            <div class="flex flex-col justify-start items-start">
              <h3 class="Grotesque-Regular text-[14px] text-[#1A1A1A]">
                Small and Medium Sized Business
              </h3>
              <p class="Grotesque-Regular text-[12px] text-[#737373]">
                I run a business organization
              </p>
            </div>
          </div>


          <baseButton
            @click="submitPreference()"
              type="submit"
              class="w-ful py-3 bg-black  text-white text-[15px] rounded-lg mt-6"
            >
             Continue
          </baseButton>


        </div>
      </div>

    </div>
  </template>
  <script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner'
  
  const emit = defineEmits(['close','update-value'])  // Declare Events

  const AccountType = ref('')

  const submitPreference = ()=>{
    if(!AccountType.value) return
    emit('update-value',AccountType.value)
  }
  
  </script>

