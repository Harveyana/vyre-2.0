<template>
      <div class="w-full flex flex-col h-fit gap-y-8 sm:gap-y-4 mx-auto py-16 px-4 sm:px-10">

        <div class="w-full flex flex-col items-start justify-center gap-y-1">
          <div class="flex flex-row items-center justify-center gap-x-2">
            <!-- <button @click="$emit('back')">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="white"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path d="M16.2452 19.1H27.2V20.9H16.2452L21.0728 25.7276L19.8002 27.0002L12.8 20L19.8002 12.9998L21.0728 14.2724L16.2452 19.1Z" fill="#686767"/>
              </svg>
            </button> -->
            <h1  class=" text-[23px] SansSemiBold font text-[#0D0D0D] font-semibold">
              Enter Authentication Code
            </h1>
          </div>
          
          <span class="text-[13px] SansRegular text-[#686767] text-left ">Enter the code sent to your mail, phone or on your third party authentication app</span>
        </div>

        <div class="w-full flex flex-col items-start justify-center gap-y-4">


          <div class="w-full flex flex-col items-start justify-start gap-y-1">
              <span class="text-[15px] SansRegular text-[#0D0D0D] text-left ">Enter Code</span>
              <input
                type="text"
                v-model="code"
                class="w-full border-[#E4E5E7] SansRegular border text-[#080708] text-[14px] py-2 px-3 rounded-xl outline-none"
              />
          </div>

        
        </div>


        <button :disabled="loading" @click.prevent="authenticate()"  class="w-full bg-black flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
          <span v-if="!loading" class="text-[16px] text-white text-center">Validate</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />
        </button>

      </div>


  </template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { authenticateOtp } = useAuthStore();



  const router = useRouter()
  const code = ref('')

  const { $toast } = useNuxtApp()

  const { handleVerification } = useAuth();

  const loading = ref(false)



  async function authenticate() {
    loading.value = true
    await handleVerification(code.value);
    loading.value = false
  }


  </script>
  <style>
  * {
  font-family: 'cabinetGrotesk', sans-serif;
 }

 .extraboldCabinet{
  font-family: 'cabinetGroteskBold', sans-serif;
 }

 .blackCabinet{
  font-family: 'cabinetGroteskBlack', sans-serif;
 }
  </style>

