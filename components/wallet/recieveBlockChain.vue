<template>
    <div class="h-fit">


      <div  class="w-full border flex flex-col px-4 rounded-2xl sm:shadow-md py-3">

        <div class="w-full p-2 flex flex-col flex-wrap items-start justify-center gap-3">


          <div class="w-full flex flex-col items-start justify-center sm:gap-x-16 border px-4 rounded-2xl py-3">

            <div class="w-full flex flex items-start">
              
              <div class="flex flex-col items-start ">

                <h1 class="text-xl flex flex-row items-center justify-center gap-x-2 truncate text-black poppinsBold">
                  <img :src=wallet?.currency?.imgUrl class="w-12 rounded-full border-8 border-white bg-white"/>
                  {{wallet?.currency?.ISO}}   
                </h1>

                 <!-- <span class="Grotesque-Regular text-[16px] truncate ml-2">
                  zero fee
                </span> -->
                <h3 class="Grotesque-Regular text-[14px] ml-2">
                  Send only {{ wallet?.currency?.ISO }} <span v-if="wallet?.currency.isStablecoin">({{ wallet.currency.chain}})</span> to this Address
                </h3>
              </div>
                          
            </div>

            <QRCode :data="wallet?.depositAddress" />

            <div  class="w-full flex rounded-full px-2 py-1 items-center justify-center text-white gap-2 bg-gray-200">
              <button @click="copyToClipboard(wallet?.depositAddress!)">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192c.373-.03.748-.057 1.124-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9"/></svg>
              </button>
                <span class="text-xs truncate text-black poppinsBold">
                  {{wallet?.depositAddress}}
                </span>
            </div>

            <div v-if="wallet?.currency?.ISO ==='XRP' && wallet?.destinationTag" class="w-full flex mt-4 rounded-full px-2 py-1 items-center justify-center text-white gap-2 bg-gray-200">
              <button @click="copyToClipboard(wallet?.destinationTag!)">
                <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192c.373-.03.748-.057 1.124-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9"/></svg>
              </button>
                <span class="text-xs truncate text-black poppinsBold">
                  {{wallet?.destinationTag}}
                </span>
            </div>


          </div>


        </div>

        

        

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>


          <baseButton
              @click="$emit('close')"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Close
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
  const { createWallet, fetchRate} = useWalletStore();
  const { queryUser } = useAuthStore();

  const { loading } = storeToRefs(useAuthStore()); 
  const showLoader = ref(false)
  
  const visible = ref(false)
  const toggleState = ref(false)

  // const state = useGlobalState()
  // const AssetMap = state.assetMap
  const entry = ref('')

  const userId = ref('')

  interface user {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    photoUrl:string
  }

  const qrData = 'https://vyre.africa';

  const allUsers = ref<user[]>([])

   interface currency {
      type: string;
      name: string;
      ISO: string;
      chain?: string;
      imgUrl?: string;
      chainImgUrl?: string;
      flagEmoji?: string;
      isStablecoin: boolean;
      createdAt: string
    }

  interface wallet {
      currency: currency;
      id:string;
      createdAt:string;
      depositAddress?:string;
      destinationTag?:string;
      accountBalance: string;
      availableBalance: string;
    }

  const wallet = defineModel<wallet>('wallet')

  // const props = defineProps({
  //   type: String,
  //   currency: String,
  //   imgurl: String,
  //   destinationTag: String,
  //   depositAddress: String
  // });

  // const {
  //   currency, 
  //   type,
  //   imgurl,
  //   depositAddress,
  //   destinationTag
  // } = props



  const route = useRouter()

  const emit = defineEmits(['next','close','back'])  // Declare Events

  async function copyToClipboard(text:string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard')
    } catch (err) {
      // console.error('Failed to copy text: ', err);
      toast.error('failed to copy text')
    }
  }



  </script>
