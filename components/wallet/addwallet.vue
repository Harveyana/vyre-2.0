<template>
      <div class="h-full">

        <div class="w-full h-[60vh] flex flex-wrap items-center justify-center gap-3 py-10 overflow-y-scroll">

        <!-- currencies -->
        <button @click="create(wallet.symbol)" v-for="wallet in wallets" :key="wallet.currency" class="w-fit flex items-center justify-between border rounded-2xl px-3 py-2">

            <div class="flex items-center justify-center gap-x-2">

              <img class="w-10" :src="wallet.imgurl"/>

              <div class="flex flex-col items-start justify-center">
                <h1 class="text-[14px] whitespace-nowrap SoraRegular text-[#080708]">
                {{wallet.symbol}}
                </h1>

                <h4 class="text-[12px] whitespace-nowrap SansRegular text-[#686767]">
                  {{wallet.currency}}
                </h4>
              </div>

            </div>

            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#000" d="M8 2.5a.5.5 0 0 0-1 0V7H2.5a.5.5 0 0 0 0 1H7v4.5a.5.5 0 0 0 1 0V8h4.5a.5.5 0 0 0 0-1H8z"/></svg> -->

        </button>

        </div>
      </div>


  </template>

  <script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  const { createWallet} = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  
  const visible = ref(false)



  const route = useRouter()

  const emit = defineEmits(['next','created','close'])  // Declare Events


  const create = async(currency:string)=>{
      emit('close')
      toast.promise(() => new Promise(async(resolve,reject) =>{
        const created = await createWallet(currency)
        if (created.success) {
          resolve({msg:created.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:created.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: 'Creating wallet',
        success: (data: any) => {
          emit('created')
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })

  }


  const wallets:{currency:string;symbol:string;imgurl:any}[] = [
        {
          currency: 'United states dollar',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/dollar.png?alt=media&token=37a66d45-cd5f-489b-ae06-26c2fa1fc42b',
          symbol:'USD'
        },
        {
          currency: 'Bitcoin',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/bitcoin.svg?alt=media&token=5b0a8d19-4b76-4ca9-abde-2a299b1a6998',
          symbol:"BTC"
        },
        {
          currency: 'Litecoin',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/litecoin.svg?alt=media&token=c7312a44-2640-400f-b268-f379badf7955',
          symbol:"LTC"
        },
        {
          currency: 'Ethereum',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/ethereum2.png?alt=media&token=c083d145-d7b9-4bfd-a100-2c7d5266cdcd',
          symbol:"ETH"
        },
        {
          currency: 'Tron',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/tron.png?alt=media&token=e8df6d78-b716-4a35-94ee-def32c78ab25',
          symbol:"TRON"
        },
        {
          currency: 'Ripple',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/ripple.png?alt=media&token=8ccd5926-0ff1-4284-8466-0eeef9bff3cd',
          symbol:"XRP"
        },
        {
          currency: 'USD Coin',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/usdc.png?alt=media&token=081f1646-7728-4adc-9aab-73ca1a55928f',
          symbol:"USDC"
        },
        {
          currency: 'Tethers(erc)',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/tether%20(1).png?alt=media&token=c4661dcf-2cf4-4a30-ab80-48f8259bd06c',
          symbol:"USDT(erc)"
        },
        {
          currency: 'Tethers(trc)',
          imgurl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/tether%20(1).png?alt=media&token=c4661dcf-2cf4-4a30-ab80-48f8259bd06c',
          symbol:"USDT(trc)"
        },
        
  ]

  </script>
