<template>

      
      <div class="flex flex-col gap-y-4">

        <h2 class="text-lg sm:text-2xl poppinsSemiBold">
          Email Verification
        </h2>
        <p class=" text-sm sm:text-lg poppinsRegular">
          OTP has been sent to harvey@vyre.africa
        </p>

        <div
            class="rounded-2xl w-full h-fit flex flex-col justify-center text-grass11 bg-gray-200 py-4 px-4 gap-x-1 sm:gap-x-2 outline-none"
            aria-label="dropdown menu options"
          >
            <h2 class="text-sm sm:text-lg poppinsRegular">
              Enter OTP
            </h2>
            
            <input v-model="emailOtp" class="w-full rounded-lg border border-black bg-gray-200 outline-none focus-none text-black poppinsSemiBold text-sm sm:text-lg px-3 py-2" placeholder="123456"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />

            <BaseButton @click="initVerification" class="w-fit py-2 px-4 mt-4 bg-black">
              <div v-if="!showLoader" class="flex items-center justify-center gap-x-2">
                <span class="text-[16px] poppinsLight text-white text-center">resend</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><path d="M.5 9.5h9a4 4 0 1 0 0-8h-3"/><path d="m3.5 6.5l-3 3l3 3"/></g></svg>

              </div>
              <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />

            </BaseButton>
        </div>

        <BaseButton @click="verify" class="w-full px-8 bg-[#89ead9] py-2 mt-4">
              <span v-if="!showLoader2" class="text-lg poppinsLight text-black text-center">Verify Email</span>
              <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />

        </BaseButton>


      </div>    

    
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  const { refreshSession,sendVerification,verifyCode,logUserOut } = useAuthStore();
  const token = useCookie('token');

  const emailOtp = ref('')
  const showLoader = ref(false)
  const showLoader2 = ref(false)
  const router = useRouter()

  const emit = defineEmits(['submit'])

  


  const initVerification = async()=>{
    showLoader.value = true
    const refreshed = await refreshSession()
    if(refreshed){
      await sendVerification()
      showLoader.value = false
    }

  }

  const verify = async()=>{
    showLoader2.value = true
    const refreshed = await refreshSession()
    if(refreshed){
      const verified = await verifyCode(emailOtp.value)
      if (verified){
        showLoader2.value = false
        emit('submit')
      }
      
    }
  }

  // emit('submitOrder',order)

  onMounted(()=>{
    initVerification()
  })



</script>