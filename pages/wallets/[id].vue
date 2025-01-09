<template>

  <div class="dark:bg-[#12171D] h-fit w-full gap-x-1 lg:gap-x-6 px-4 sm:px-10 py-8">
    

    <div class="w-full flex flex-col sm:flex-row gap-y-4 ">

      <div class="w-full sm:w-[70%] flex flex-col gap-y-6">

        <div class="w-[95%] flex flex-col items-start justify-between gap-x-3">

          <div class="flex items-center justify-center gap-x-3 mb-4">

            <button @click="$router.push('/wallets')">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="white"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path d="M16.2452 19.1002H27.2V20.9002H16.2452L21.0728 25.7278L19.8002 27.0004L12.8 20.0002L19.8002 13L21.0728 14.2726L16.2452 19.1002Z" fill="#686767"/>
              </svg>
            </button>

            <img :src=wallet.imgurl class="w-12 rounded-full border-8 border-white bg-white"/>
            <h1 class="text-black dark:text-white Grotesque-Bold text-2xl sm:text-2xl">
              <span class="truncate">{{wallet.currency}}</span>
            </h1>
          </div>


          <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-4">

              <div class="w-full sm:w-1/2 flex flex-col items-start justify-center bg-white rounded-2xl p-4 gap-y-2 drop-shadow-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#000"><path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"/><path d="M15.004 7.803C9.576 7.426 5.104 6.62 3 6v9.061c0 1.995 0 2.992.62 3.805s1.47 1.043 3.17 1.503c2.746.742 5.634 1.184 8.22 1.436c2.682.262 4.022.393 5.006-.506c.984-.898.984-2.343.984-5.231v-2.014c0-2.805 0-4.207-.807-5.077s-2.268-.972-5.19-1.174"/><path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96"/></g></svg>
                  <p class="Grotesque-Regular text-xs text-[#1D3160]">
                    Balance
                  </p>
                  
                  <span class="flex flex-col text-black Grotesque-Bold text-2xl">
                      <div v-if="!loading">
                        <span class="truncate">{{parseFloat(wallet.accountBalance).toFixed(wallet.type ==='CRYPTO'? 8 : 2)}}</span> <span class="text-sm">{{wallet.currency}}</span>
                      </div>
                      <div v-else>
                        <span class="truncate">---</span>
                      </div>

                      <span v-if="wallet.type ==='CRYPTO'" class="text-gray-500 Grotesque-Regular text-sm">
                        ~{{ rate.balance }}
                      </span>
                  </span>

              </div>

              <div class="w-full sm:w-1/2 flex flex-col items-start justify-center bg-white rounded-2xl p-4 gap-y-2 drop-shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#000" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12s5.373 12 12 12m5.06-13.44l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2-2a1.5 1.5 0 0 1 2.12-2.12l.94.939l4.44-4.44a1.5 1.5 0 0 1 2.12 2.122"/></svg>
                  <p class="Grotesque-Regular text-xs text-[#1D3160]">
                    Available Balance
                  </p>
                  
                  <div class="flex flex-col text-black Grotesque-Bold text-2xl ">
                      <div v-if="!loading">
                        <span class="truncate">{{parseFloat(wallet.availableBalance).toFixed(wallet.type ==='CRYPTO'? 8 : 2)}}</span> <span class="text-sm">{{wallet.currency}}</span>
                      </div>
                      <div v-else>
                        <span class="truncate">---</span>
                      </div>
  
                      <span v-if="wallet.type ==='CRYPTO'" class="text-gray-500 Grotesque-Regular text-sm">
                        ~{{ rate.available }}
                      </span>
                  </div>
                   
              </div>

          </div>

        </div>

        <div class="sm:hidden w-full sm:w-[50%] flex flex-col gap-y-6 px-2">

          <div class="w-full flex items-center justify-between sm:justify-center gap-x-3">

            <baseButton @click="showSendModal = true" class="flex items-center justify-center gap-x-2 bg-black rounded-xl border border-white Grotesque-Bold w-[50%] py-2 px-6 text-white text-[16px]">
              Send
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#fff" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05"/></svg>
            </baseButton>

            <baseButton @click="showRecieveModal = true" class="flex items-center justify-center gap-x-2 bg-white rounded-xl border border-black Grotesque-Bold w-[50%] py-2 px-4 text-black text-[14px]">
              Replenish
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#000"><path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"/><path d="M3 12V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506a62 62 0 0 1-2.011-.23"/><path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96M11 18H7m0 0H3m4 0v4m0-4v-4"/></g></svg>
            </baseButton>
            
          </div>

        </div>

        <!-- Recents Transactions -->
        <div class="w-full ">
          <div class="w-full flex flex-row items-center justify-between mb-4 sm:px-3">
            <h2 class="text-black dark:text-white text-xl Grotesque-Regular">
             Latest Transactions
            </h2>
            <button class="w-fit my-auto px-3 py-2 hover:bg-gray-500 Grotesque-Regular border dark:text-white text-[14px] border-gray-400 rounded-xl">
              View all
            </button>
          </div>
          
          <div class="overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 space-y-4">
            <Recent :recents="transactions"/>
          </div>
        </div>
        

      </div>


      <div class="hidden sm:flex w-full sm:w-[30%] flex-col gap-y-6 ">

        <div class="w-full flex items-center justify-between sm:justify-center gap-x-3">

          <baseButton @click="showSendModal = true" class="flex items-center justify-center gap-x-2 bg-black rounded-xl border border-white Grotesque-Bold w-[50%] py-2.5 px-6 text-white text-[16px]">
            Send
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#fff" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05"/></svg>
          </baseButton>

          <baseButton @click="showRecieveModal = true" class="flex items-center justify-center gap-x-2 bg-white rounded-xl border border-black Grotesque-Bold w-[50%] py-2.5 px-6 text-black text-[14px]">
            Replenish
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#000"><path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"/><path d="M3 12V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506a62 62 0 0 1-2.011-.23"/><path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96M11 18H7m0 0H3m4 0v4m0-4v-4"/></g></svg>          
          </baseButton>
        </div>

        <!-- <div class=" bg-white dark:bg-[#0B1015] rounded-xl w-full h-full">

        </div> -->

      </div>
      

    </div>
    

    <!-- Trip History -->

    <!-- <div class="w-full flex flex-col items-center justify-start py-4 sm:py-6 gap-y-4">

      <div class="w-full flex items-center hover:bg-gray-100 cursor-pointer justify-start border border-[#F4F4FB] rounded-xl p-5 gap-x-3">
        <img src="~/assets/img/completeTrip.svg" class=""/>

        <div class="flex flex-col items-start justify-start">
          <h1 class="Grotesque-Regular text-[16px] text-[#010109]">
            Trip 2897
          </h1>

          <h3 class="Grotesque-Regular text-[14px] text-[#737373]">
            Area 5A, Ikeja City Mall Ikeja Lagos-Kano Gwarimpa Market, Off Kaduna Bus-Stop Ejigbo Lagos
          </h3>

          <h4 class="Grotesque-Regular text-[12px] text-[#737373]">
            Oct 21, 10:24a.m
          </h4>

        </div>

      </div>


      <div class="w-full flex items-center  hover:bg-gray-100 cursor-pointer  justify-start border border-[#F4F4FB] rounded-xl p-5 gap-x-3">
        <img src="~/assets/img/completeTrip.svg" class=""/>

        <div class="flex flex-col items-start justify-start">
          <h1 class="Grotesque-Regular text-[16px] text-[#010109]">
            Trip 2897
          </h1>

          <h3 class="Grotesque-Regular text-[14px] text-[#737373]">
            Area 5A, Ikeja City Mall Ikeja Lagos-Kano Gwarimpa Market, Off Kaduna Bus-Stop Ejigbo Lagos
          </h3>

          <h4 class="Grotesque-Regular text-[12px] text-[#737373]">
            Oct 21, 10:24a.m
          </h4>

        </div>

      </div>

    </div> -->

    


  </div>

  <BaseDialogue :visible="showSendModal">

    <div class="relative flex flex-col lg:w-[350px] gap-y-4">
          
          <div class=" w-full flex items-center justify-between bg-white ">
            <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
              Send {{wallet.currency}}
            </h1>
  
            <button @click="showSendModal = false">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>
          </div>

          <SendForm
            @close="showSendModal = false" 
            :currency="wallet.currency" 
            :type="wallet.type" 
            :balance="wallet.availableBalance"
          />
  
        </div>


  </BaseDialogue>

  <BaseDialogue :visible="showRecieveModal">

    <div class="relative flex flex-col lg:w-[350px] gap-y-4">
          
          <div class=" w-full flex items-center justify-between bg-white ">
            <!-- <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
              Recieve {{wallet.currency}}
            </h1> -->

            <div class="w-full flex flex-col">

              <p class="Grotesque-Regular text-[14px] text-[#737373]">
                Select how you want to recieve {{wallet.currency}}
              </p>
              <h3 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
                {{transferType == 'VYRE'? 'Vyre Network': transferType }}
              </h3>

            </div>

            <button @click="showRecieveModal = false">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>
          </div>

          <RecieveForm
            @close="showRecieveModal = false"
            @update_TransferType ="(value:string)=>transferType = value"
            :wallet="wallet"
          />

        </div>


  </BaseDialogue>

</template>

<script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import {useRate} from '../../composables/useRate';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  const { getWallet, fetchRate } = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs

// const token = useCookie('token');
type wallet = {
    currency:string,
    id:string,
    createdAt:string,
    depositAddress?:string,
    destinationTag?:string,
    type:string,
    imgurl:string
    accountBalance:string
    availableBalance:string
 }



const route = useRoute()
const router = useRouter()

// const tab = ref('FIAT')
const showSendModal = ref(false)
const showRecieveModal = ref(false)

const transferType = ref('Choose Your Preference')

const rate = ref({
  balance:'0',
  available:'0'
})

const wallet = ref<wallet>({
    currency:'',
    id:'',
    createdAt:'',
    type:'',
    imgurl:'',
    accountBalance:'0',
    availableBalance:'0'
})

// const {rate, refreshing, getRate} = useRate(1.2,'BTC','NGN')

// console.log(rate(1.2,wallet.currency,'NGN'))


const fetchWallet = async()=>{

    const result = await getWallet(route.params.id as string)
  
    console.log(result)
    if(result?.success){
      wallet.value = result?.wallet
      rate.value = result?.rate
      return 
    }
} 

// const getRate = async()=>{

//   const result = await fetchRate(1.2,'BTC','NGN')
  
//     console.log(result)
//     if(result?.success){
//       console.log(result?.value)
//       return getRate()
//     }
// }

onMounted(async()=>{
  fetchWallet()
})


const transactions:{type:string;source?:string;symbol:string;destination?:string;currency:string;date:string;description:string;amount:number}[]=[
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
      {
        type:'received',
        source:'harveyana@yahoo.com',
        currency:'EUR',
        symbol:'€',
        date:'April 17 2014 6:30pm',
        description:'payment for house services',
        amount:5300
      },
      {
        type:'received',
        source:'harveyana@yahoo.com',
        currency:'EUR',
        symbol:'€',
        date:'April 17 2014 6:40pm',
        description:'payment for house services',
        amount:5300
      },
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
      {
        type:'sent',
        destination:'hilda234@yahoo.com',
        currency:'USD',
        symbol:'$',
        date:'jan 3 2004 12:30pm',
        description:'payment for fashion services',
        amount:2400
      },
    ]




    
</script>

