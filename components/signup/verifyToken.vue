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
        Enter the 6-digit code sent to your email for verification, check
        spam/promotions if you can’t find the email.
      </p>

      <button @click="retry()">
        <h3 class="Grotesque-Bold text-[15px] text-[#737373] mt-1">
         Resend
        </h3>
      </button>
      <div id="clerk-captcha"></div>

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

  const { ResendVerification, handleVerification } = useAuth();
  const { $clerk } = useNuxtApp()

  const emit = defineEmits(['submit','verified'])

  const pinValue = ref<string[]>([])
  const pinString = ref()

  // const { $toast } = useNuxtApp()

  const router = useRouter()

  const retry = async()=>{
    toast.promise(() => new Promise(async(resolve,reject) =>{
      const resent = await ResendVerification()
      if (resent.success) {
        resolve({msg:resent.message})
        // emit('verified', verified?.userId)
      }else{
        reject({msg:resent.message})
        // $toast.error(verified.msg)
      }
    }), 
    {
      loading: 'resending code',
      success: (data: any) => {
        // emit('verified', data.userId)
        return data.msg
      },
      error: (data: any) => {return data.msg}
    })
  }

  const submit = async(code:number)=>{

    console.log('started')
    toast.promise(() => new Promise(async(resolve,reject) =>{
      const result = await handleVerification(String(code))
      if(result.success)
      resolve({msg:result.message})
      // emit('verified', verified?.userId)
      else{
        reject({msg:result.message})
      }
      
    }), 
    {
      loading: 'verifying token..',
      success: async(data: any) => {
        // emit('verified', data.userId)
        // router.push('/')
        return data.msg
      },
      error: (data: any) => {return data.msg}
    })

  }

  const handleComplete = (e: string[]) => {
    const pin = parseFloat(e.join(''))
    pinString.value = pin
    console.log(pin)
    submit(pin)
    // emit('submit', pin)
  }

  // const props = defineProps<{
  //   email: string;
  // }>()


</script>
