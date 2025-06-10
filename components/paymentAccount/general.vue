<template>

  <div class="w-full min-h-[65vh] flex items-center justify-center">  
    <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-lg overflow-y-auto pt-8">
      

      <!-- <div class="w-full h-fit flex flex-col items-center justify-center gap-3 rounded-3xl shadow-md px-2 pt-4 sm:pt-6 pb-4">

        <div class="flex flex-col items-center justify-center gap-y-4">

          <button class="w-full rainbow-border-box flex flex-col items-center justify-center gap-y-2 rounded-2xl p-[5px]  bg-black">

               <div class=" w-full flex flex-row items-center justify-between sm:gap-y-2 rounded-3xl p-2 py-4 sm:p-4  bg-black">

                  <div class="flex flex-col items-start justify-start px-4">
                     <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[17px] text-white relative">
                        Payment Accounts
                     </h1> 
                     <h3 class="Grotesque-Light text-start text-[11px] sm:text-[12px] text-white">
                        To start swapping, please add your payment methods
                     </h3>
                  </div>

                  <div class="p-1 sm:p-2 bg-white flex items-center justify-center rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M41.9999 24H5.99994"/><path d="M30 12L42 24L30 36"/></g></svg>
                  </div>


               </div>

          </button>

          <button class="p-1 self-end mr-2 sm:p-2 bg-white flex items-center justify-center rounded-full">
            Skip
          </button>

        </div>
      
        

      </div> -->

      <div class="w-full h-fit flex flex-col items-center justify-start gap-3 rounded-3xl shadow-md px-2 pt-4 sm:pt-6 pb-4">

        <TabsRoot v-model:modelValue="TAB" class="w-full bg-[#F8F8FC] h-fit rounded-2xl" default-value="FIAT">
              <TabsList class="h-full p-1 rounded-2xl bg-[#F8F8FC] shrink-0 flex items-center justify-center" aria-label="Manage your account">

                <TabsTrigger
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[11px] sm:text-[13px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      value="FIAT"
                    >
                    BANK ACCOUNT
                </TabsTrigger>

                <TabsTrigger
                      class="Grotesque-Regular py-2.5 flex-1 flex items-center justify-center text-[11px] sm:text-[13px] leading-none text-[#A7A7A7] select-none  rounded-2xl  data-[state=active]:bg-white data-[state=active]:text-black outline-none cursor-default transition ease-in-out duration-300"                      
                      value="CRYPTO"
                    >
                    CRYPTO ACCOUNT
                </TabsTrigger>
                    
              </TabsList>
                        
        </TabsRoot>

        <AddFiat v-if="TAB === 'FIAT'" @switch="TAB = 'CRYPTO'" />
        <AddCrypto v-if="TAB === 'CRYPTO'"  />


      </div>

      <button @click="$emit('close')" class="p-1 self-end mr-2 sm:p-2 bg-white flex items-center justify-center rounded-full">
        Close
      </button>

      
    </div>

  </div>
    
</template>

<script setup lang="ts">
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '~/store/auth';
  import { useSwapStore } from '~/store/swap';

  const { initiateSwap} = useSwapStore();
  const { getProfile,logUserOut } = useAuthStore();

  const { user } = storeToRefs(useAuthStore());


// definePageMeta({
//   layout: 'swap'
// })
const showConfirm = ref(false)

const quote = ref<any>()
const order = ref<any>()
const transaction = ref<any>()

const inprogress = ref<any>(false)

const TAB = ref('FIAT');
const userId = ref('')

const info = ref('Coming soon')



const cancelOrder = ()=>{
  TAB.value = 'SET'
  showConfirm.value = false
}

const initiate = async()=>{
  inprogress.value = true
    const result = await initiateSwap({quoteId: quote.value?.quoteId})
    
    console.log(result)
    if(result?.success){
      console.log(result)
      transaction.value = result?.transaction
      toast.success('Order Created Sucessfully')
    }

    inprogress.value = false



  }

const handleAction = async(action:string)=>{

  if(action == 'SET'){
    return TAB.value = 'CONFIRM'
  }
  if(action == 'CONFIRM'){
    await initiate()
    return TAB.value = 'DETAILS'
  }
  if(action == 'DETAILS'){
    return TAB.value = 'SUCCESS'
  }
}




</script>

<style>
* {
  font-family: "cabinetGrotesk", sans-serif;
}

.extraboldCabinet {
  font-family: "cabinetGroteskBold", sans-serif;
}

.blackCabinet {
  font-family: "cabinetGroteskBlack", sans-serif;
}
</style>
