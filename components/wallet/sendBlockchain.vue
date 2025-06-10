<template>
    <div class="h-fit">

      <div class="w-full flex flex-col ml-2">

        <p class="Grotesque-Regular text-[16px] text-[#737373]">
          Enter Blockchain Address
        </p>
        <!-- <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
          Choose Your Preference
        </h3> -->

      </div>

      <div  class="w-full border flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

        <div class="w-full flex items-start justify-between sm:justify-center sm:gap-x-16 border px-4 rounded-2xl py-4">

          <div class="w-full flex flex-col items-start justify-center gap-y-2">
           
            <input v-model="BLOCKCHAIN.address" class="w-full bg-gray-200 outline-none rounded-xl focus-none border-none text-black Grotesque-Bold text-[14px] py-2 px-3" name="numberInput" placeholder="Blockchain Address" />
            <input v-if="currency === 'XRP'" v-model="BLOCKCHAIN.destinationTag" class="w-full bg-gray-200 outline-none rounded-xl focus-none border-none text-black Grotesque-Bold text-[14px] py-2 px-3" name="numberInput" placeholder="Destination Tag" />


          </div>

     
          


        </div>

        
        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>

          <baseButton
              @click="sendAsset()"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Send
          </baseButton>

        </div>

      
      </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  import { useAuthStore } from '~/store/auth';
  const { blockchainTransfer } = useWalletStore();


  const { loading } = storeToRefs(useAuthStore()); 
  
  const amount = defineModel<number>('Amount')
  const BLOCKCHAIN = reactive({
    address: '',
    destinationTag: '',
  })

  const props = defineProps({
    type: String,
    currency: String,
  });

  const {currency, type} = props

  const route = useRouter()

  const emit = defineEmits(['next','update-value','back','close'])  // Declare Events


  const sendAsset = async()=>{
      if(!BLOCKCHAIN.address) return
      if(currency === 'XRP' && !BLOCKCHAIN.destinationTag) return
      emit('close')
      toast.promise(() => new Promise(async(resolve,reject) =>{
        const transfered = await blockchainTransfer(
          {
            amount: amount.value!,
            currency: currency!,
            address: BLOCKCHAIN.address, 
            destinationTag: BLOCKCHAIN.destinationTag
          })

        if (transfered.success) {
          resolve({msg:transfered.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:transfered.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: `Sending ${currency}`,
        success: (data: any) => {
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }
  

  // const submitInfo = ()=>{
  //   if(currency === 'XRP' && !BLOCKCHAIN.destinationTag) return
  //   if(!BLOCKCHAIN.address) return
  //   emit('update-value', BLOCKCHAIN)
  // }

  // onMounted(async()=>{
  //   getRate()
  // })


  </script>
