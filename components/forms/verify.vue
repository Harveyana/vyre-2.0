<template>
  <div
    class="w-full h-full bg-white rounded-xl"
  >
    <div class="w-full h-full rounded-xl px-2 sm:px-8 py-6 overflow-y-auto">

      <p class="Grotesque-Regular text-[16px] text-[#737373]">Get started with</p>
      <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A] mt-1">
        OTP Verification
      </h3>

      <p class="Grotesque-Regular text-[14px] text-[#737373] my-3">
        Enter the 6-digit code sent to {{props.email}} for verification, check
        spam/promotions if you can’t find the email.
      </p>

      <button @click="retry()">
        <h3 class="Grotesque-Bold text-[15px] text-[#737373] mt-1">
         Resend
        </h3>
      </button>

      <PinInputRoot
              id="pin-input"
              v-model="pinValue"
              placeholder="○"
              class="flex gap-3 items-center mt-1"
              @complete="handleComplete"
                  >
              <PinInputInput
                v-for="(id, index) in 6"
                  :key="id"
                  :index="index"
                class="w-12 h-12 bg-[#F9F9FC] border-[1px] border-[#2F2B43]/10 text-black text-center rounded-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#0050AB]"
              />
      </PinInputRoot>

      
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner';

  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  const { SubmitOtp, resendOtp } = useAuthStore();   
  const { loading } = storeToRefs(useAuthStore());

  const emit = defineEmits(['submit','verified'])

  const pinValue = ref<string[]>([])
  const pinString = ref()

  // const { $toast } = useNuxtApp()

  const retry = async()=>{
    toast.promise(() => new Promise(async(resolve,reject) =>{
      const resent = await resendOtp({email:props.email})
      if (resent.success) {
        resolve({msg:resent.msg})
        // emit('verified', verified?.userId)
      }else{
        reject({msg:resent.msg})
        // $toast.error(verified.msg)
      }
    }), 
    {
      loading: 'Loading',
      success: (data: any) => {
        // emit('verified', data.userId)
        return data.msg
      },
      error: (data: any) => {return data.msg}
    })
  }

  const submit = async(code:number,email:string)=>{

    // const verified = await SubmitOtp({code:code,email:email})
    // if (verified.success) {
    //   emit('verified', verified?.userId)
    // }else{
    //   $toast.error(verified.msg)
    // }
    console.log('started')
    toast.promise(() => new Promise(async(resolve,reject) =>{
      const verified = await SubmitOtp({code,email})
      if (verified.success) {
        resolve({msg:verified.msg, userId:verified?.userId})
        // emit('verified', verified?.userId)
      }else{
        reject({msg:verified.msg})
        // $toast.error(verified.msg)
      }
    }), 
    {
      loading: 'Loading',
      success: (data: any) => {
        emit('verified', data.userId)
        return data.msg
      },
      error: (data: any) => {return data.msg}
    })

  }

  const handleComplete = (e: string[]) => {
    const pin = parseFloat(e.join(''))
    pinString.value = pin
    console.log(pin)
    submit(pin, props.email)
    // emit('submit', pin)
  }

  const props = defineProps<{
    email: string;
  }>()


</script>
