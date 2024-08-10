<template>

      <div class="w-full flex flex-col gap-y-4">

        <h2 class="text-lg sm:text-2xl poppinsSemiBold">
          Create Authorisation Pin
        </h2>
        <p class=" text-sm sm:text-lg poppinsRegular">
          Required for initiating transactions 
        </p>

        <div
            class="rounded-2xl w-full h-fit flex flex-col justify-center text-grass11 bg-gray-200 py-4 px-4 gap-x-1 sm:gap-x-2 outline-none"
            aria-label="dropdown menu options"
          >
            <h2 class="text-sm sm:text-lg poppinsRegular">
              Enter OTP
            </h2>
            
            <PinInputRoot
              id="pin-input"
              v-model="pinValue"
              placeholder="○"
              class="flex gap-2 items-center mt-1"
              @complete="handleComplete"
                  >
              <PinInputInput
                v-for="(id, index) in 5"
                  :key="id"
                  :index="index"
                class="w-12 h-12 bg-white border rounded text-center shadow-lg text-black placeholder:text-gray-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#DAA520]"
              />
            </PinInputRoot>
        </div>

        <BaseButton @click="setAuthorisation" class="w-full px-8 bg-[#89ead9] py-2 mt-4">
              <span v-if="!showLoader" class="text-lg poppinsLight text-black text-center">Finish Setup</span>
              <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />

        </BaseButton>


      </div>    

    
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  const { refreshSession,setPin } = useAuthStore();
  const token = useCookie('token');

  const pinValue = ref<string[]>([])
  const pinString = ref('')

  const handleComplete = (e: string[]) => {
    const pin = parseFloat(e.join(''))
    pinString.value = pin
    console.log(pin)

  }

  const showLoader = ref(false)
  const showLoader2 = ref(false)
  const router = useRouter()

  const emit = defineEmits(['submit'])

  

  // const initVerification = async()=>{
  //   showLoader.value = true
  //   const refreshed = await refreshSession()
  //   if(refreshed){
  //     await sendVerification()
  //     showLoader.value = false
  //   }

  // }

  const setAuthorisation = async()=>{
    // const pin = parseFloat(e.join(''))
    showLoader.value = true
    const refreshed = await refreshSession()
    if(refreshed){
      const isPin = await setPin(pinString.value)
      if (isPin){
        showLoader.value = false
        router.push('/')
      }
      
    }
  }




</script>