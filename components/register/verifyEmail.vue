<template>
      <div class="w-full flex flex-col h-fit gap-y-8 sm:gap-y-10 mx-auto py-6">

        <div class="w-full flex flex-col items-center justify-center gap-y-3">
          <h1  class=" text-[23px] SansSemiBold font text-[#0D0D0D] font-semibold">
            Verify  Mail
          </h1>
          <span class="text-[13px] SansRegular text-[#686767] text-center ">Please verify your account with link sent to the mail <br>{{email}}</span>

          <div class="mt-4">
            <img src="~/assets/img/envelope.svg" alt="mail">
          </div>

        </div>

        <button :disabled="true" @click=""  class="w-full bg-[#FF2E42] flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
          <span v-if="!showLoader" class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Proceed</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />
        </button>

        <button @click="sendAgain()" class="flex flex-row items-center justify-center gap-x-1">
          <h3 class="text-[10px] sm:text-[12px] SansRegular text-[#686767] text-left ">Didn't get link ?</h3>
          <span class="text-[10px] sm:text-[12px] SansRegular text-[#0D0D0D] text-left ">Resend Email</span>
        </button>

      </div>

      <BaseToast :model="toast.show" :success="toast.success" :title="toast.title" :description="toast.description" @close="toast.show = false"/>

  </template>

  <script setup lang="ts">

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { resendEmail } = useAuthStore();

  const { email } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  const visible = ref(false)

  const toast = reactive({
    show:false,
    title:'',
    description:'',
    success:true
  })

  const initToast=(success:boolean,title:string,description:string)=>{
    toast.title = title
    toast.description = description
    toast.success = success
    toast.show = true
  }

  const route = useRouter()

  const emit = defineEmits(['next'])  // Declare Events


  async function sendAgain() {
        showLoader.value = true
        const result = await resendEmail({email: email}); //resend email

        if (result.success) {
          showLoader.value = false
          initToast(true,'Successful',result.msg)
        }else{
          showLoader.value = false
          initToast(false,'resending Failed',result.msg)
        }
        
  }

  </script>
  <style>
  
  </style>