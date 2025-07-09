<template>

  <div class="dark:bg-[#12171D] h-[80vh] w-full gap-x-1 lg:gap-x-6 px-4 sm:px-6 py-8">

    <div class="w-full flex flex-col sm:flex-row gap-6 ">

      <div class="w-full sm:w-[70%] flex flex-col gap-y-6">

        <div class="w-[95%] flex items-center justify-between gap-x-3">

          <TabsRoot v-model:modelValue="tab" class="w-full sm:w-[50%] bg-[#F8F8FC] dark:bg-gray-900 h-fit rounded-2xl" default-value="fiats">
              <TabsList class="h-full p-1 rounded-2xl bg-[#F8F8FC]  dark:bg-gray-900 shrink-0 flex items-center justify-center" aria-label="Manage your account">

                <TabsTrigger
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      value="CRYPTO"
                    >
                    Crypto
                </TabsTrigger>

                <TabsTrigger
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[14px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      value="FIAT"
                    >
                    Fiats
                </TabsTrigger>
                    
              </TabsList>
                        
          </TabsRoot>

          <button class="flex items-center justify-center gap-x-2" @click="showAddWallet = !showAddWallet">
            <h1 class="text-[14px] sm:text-[18px] whitespace-nowrap Grotesque-Bold text-[#080708] dark:text-gray-300">
              Add wallet
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" class="text-black dark:bg-white rounded-xl" width="40" height="40" viewBox="0 0 24 24"><path  fill-rule="evenodd" d="M7.345 4.017a42.3 42.3 0 0 1 9.31 0c1.713.192 3.095 1.541 3.296 3.26a40.7 40.7 0 0 1 0 9.446c-.201 1.719-1.583 3.068-3.296 3.26a42.3 42.3 0 0 1-9.31 0c-1.713-.192-3.095-1.541-3.296-3.26a40.7 40.7 0 0 1 0-9.445a3.734 3.734 0 0 1 3.295-3.26M12 7.007a.75.75 0 0 1 .75.75v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1 0-1.5h3.493V7.757a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>
          </button>

        </div>

        <div class="flex w-full rounded-2xl p-3.5 bg-white/60 dark:bg-black/60 ">
          <div v-if="loading" class="w-full h-[40vh] flex items-center justify-center">
            <img class="animate-pulse animate-bounce" src="~/assets/img/icons/walletLoader.svg" />
          </div>
          <div v-else-if="!wallets.length" class="w-full h-[40vh] flex items-center justify-center">
            <h1 class="text-[14px] sm:text-[18px] whitespace-nowrap Grotesque-Bold text-[#080708] dark:text-gray-300">
              No wallet yet
            </h1>
          </div>
          <div v-else class="w-full h-fit flex flex-row flex-wrap items-start justify-start gap-4">
            <WalletCard :wallet="wallet" v-for="wallet in wallets" :key="wallet?.id"/>
          </div>

        </div>
        

      </div>


      <div class="w-full sm:w-[30%] flex flex-col gap-y-6 ">

        <div class="w-full flex items-center justify-between sm:justify-center gap-x-3">

          <baseButton class="bg-black rounded-xl border border-white Grotesque-Bold w-[50%] py-3 px-8 text-white text-[14px]">
            Send
          </baseButton>

          <baseButton class="bg-white rounded-xl border border-black Grotesque-Bold w-[50%] py-3 px-6 text-black text-[14px]">
            Replenish
          </baseButton>
        
        </div>

        <div class=" bg-white/50 dark:bg-[#0B1015] rounded-xl w-full h-full">

        </div>

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

    
    <BaseDialogue :visible="showAddWallet">

      <div class="relative flex flex-col lg:w-[450px] gap-y-4">
            
            <div class=" w-full flex items-center justify-between bg-white ">
              <h1 class="text-[18px] whitespace-nowrap SoraRegular text-[#080708]">
                Add Wallet
              </h1>
    
              <button @click="showAddWallet = false">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                  <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                </svg>
              </button>
            </div>

            <Addwallet @close="showAddWallet = false" @created="onWalletCreated()"/>
    
          </div>


    </BaseDialogue>

  </div>

  

</template>

<script setup lang="ts">

  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useWalletStore } from '~/store/wallet';
  const { getWallets } = useWalletStore();

  const { loading } = storeToRefs(useWalletStore()); // make authenticated state reactive with storeToRefs

// const token = useCookie('token');

type currency = {
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

 type wallet = {
    currency:currency,
    id:string,
    createdAt:string,
    imgurl:string
    accountBalance:string
    availableBalance:string
 }



const route = useRoute()
const router = useRouter()
const wallets = ref<wallet[]>([])

const tab = ref('FIAT')
const showAddWallet = ref(false)

const toggleState = ref(false)
const startDate = ref();
const EndDate = ref();

const onWalletCreated = async()=>{
  await fetchWallets()
}

watch(() => [tab.value], async(newvalue, oldvalue) => {
  await fetchWallets()
});

const fetchWallets = async()=>{

    const result = await getWallets(tab.value)
  
    console.log(result)
    if(result?.success){
      wallets.value = []
      return wallets.value.push(...result?.wallets)
    }
} 

onMounted(async()=>{
  await fetchWallets()
})




    
</script>

