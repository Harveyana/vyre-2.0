<template>

  <div class="w-full flex items-center justify-center">

    <SwapMenu />
  
    <div class=" w-[90%] sm:w-full h-[80vh] sm:h-[75vh] flex flex-col items-center justify-start gap-3 rounded-lg overflow-y-auto pt-8">
      

      <div class="w-full h-fit sm:w-[65%] flex flex-col items-center justify-center gap-3 rounded-3xl bg-gradient-to-b from-white/50 to-[#F6F6F6] shadow-md px-4 sm:px-10 pt-4 sm:pt-6 pb-4">

        <div class="w-fit flex items-center justify-center gap-2">
          <button
           data-aos-once="true"
           :class="TAB === 'SET' ? 'text-gray-700 bg-[#e5f2fe] Grotesque-Regular whitespace-nowrap text-[12px] sm:text-[16px] rounded-3xl px-2 sm:px-4 py-2 sm:py-2' 
           : 'text-gray-300 bg-[#212528] rounded-3xl Grotesque-Thin py-1 px-3 sm:py-2 sm:px-4'"
          >
           {{TAB === 'SET' ? 'Set Currency': '1'}}
          </button>

          <button
           data-aos-once="true"
          :class="TAB === 'CONFIRM' ? 'text-gray-700 bg-[#e5f2fe] Grotesque-Regular whitespace-nowrap text-[12px] sm:text-[16px] rounded-3xl px-2 sm:px-4 py-2 sm:py-2' 
           : 'text-gray-300 bg-[#212528] rounded-3xl Grotesque-Thin py-1 px-3 sm:py-2 sm:px-4'"
          >
           {{TAB === 'CONFIRM' ? 'Confirm': '2'}}
          </button>

          <button
          data-aos-once="true"
          :class="TAB === 'DETAILS' ? 'text-gray-700 bg-[#e5f2fe] Grotesque-Regular whitespace-nowrap text-[12px] sm:text-[16px] rounded-3xl px-2 sm:px-4 py-2 sm:py-2' 
           : 'text-gray-300 bg-[#212528] rounded-3xl Grotesque-Thin py-1 px-3 sm:py-2 sm:px-4'"
          >
            {{TAB === 'DETAILS' ? 'Details': '3'}}
          </button>

          <!-- <button class="text-gray-300 bg-[#212528] Grotesque-Thin rounded-3xl py-1 px-3 sm:py-2 sm:px-4">
            4
          </button> -->

        </div>

        <SwapOrder v-if="TAB === 'SET'"
          v-model:quote="quote"
          v-model:order="order"
        />

        <ConfirmOrder v-if="TAB === 'CONFIRM'"
         :quote="quote"
         :order="order"
         v-model:transaction="transaction"
         v-model:loading="inprogress"
        />
        <Details v-if="TAB === 'DETAILS'"
         :transaction="transaction"
        />

        <div class="w-full flex flex-col sm:flex-row items-center justify-between mt-2 sm:mt-3 gap-y-2">
          <div v-if="quote && order" class="flex flex-col items-start justify-start ">
            <h1 class="Grotesque-Regular  text-[14px] sm:text-[16px] ">
              {{order.SOURCE.amount}} {{order.SOURCE.label}} -> {{parseFloat(quote.destinationAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} {{order.DESTINATION.label}}
            </h1>
            <h3 class="Grotesque-Light sm:text-[11px] text-[13px] whitespace-nowrap">
              Rate is for refernce only, updated just now 
            </h3>
          </div>

          <div class="w-full sm:w-fit flex items-center justify-center ml-auto gap-3">
            <button v-if="TAB ==='CONFIRM'" @click="showConfirm = true" class="w-full flex items-center justify-center gap-1 sm:w-fit text-black bg-gray-200 hover:bg-gray-100 Grotesque-Regular rounded-3xl px-6 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m46.196 16.205l-19.392 19.46l19.392 19.46"/></svg>
              back
            </button> 
            <button v-if="TAB !=='DETAILS'" @click="handleAction(TAB)" :disabled="inprogress" :class="inprogress ? 'bg-gray-200 text-white' : 'bg-black text-gray-200'" class="w-full sm:w-fit   Grotesque-Regular rounded-3xl px-6 py-2">
              Continue
            </button> 
            <button v-if="TAB ==='DETAILS'" @click="$router.push('/swap/orders')" :disabled="inprogress" :class="inprogress ? 'bg-gray-200 text-white' : 'bg-black text-gray-200'" class="w-full sm:w-fit  Grotesque-Regular rounded-3xl px-6 py-2">
              View Orders
            </button> 
          </div>

          
        </div>
      
        

      </div>
    </div>

    <BaseDialogue :visible="showConfirm">
      <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
            
            <div class="w-full flex items-start justify-between">

                <div class="flex flex-col items-start justify-center gap-y-[2px]">
                    <h1 class="Grotesque-Bold text-[20px] text-[#1A1A1A]">
                    You wish to Cancel Order ?
                    </h1>

                    <h4 class=" max-w-[90%] Grotesque-Regular text-[14px] text-[#737373]">
                      Are you sure you want to ? All progress will be lost. We will be here
                    </h4>
                </div>

                <button @click="showConfirm = false">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                        <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
                    </svg>
                </button>
            </div>

            <div class="flex flex-col items-center justify-center gap-y-3">


                <div class="w-full flex items-center justify-center gap-x-4">

                    <button @click="cancelOrder()" class="w-full sm:w-1/2 bg-black flex flex-row items-center justify-center rounded-2xl mt-6 py-3 px-2">
                      <span class="text-[16px] SoraRegular text-[#FFFFFF] text-center">Yes, Cancel Order</span>
                    </button>

                    <button @click="showConfirm = false"  class="w-full sm:w-1/2 bg-white flex flex-row items-center justify-center rounded-2xl mt-6 py-3">
                    <span class="text-[16px] SoraRegular text-[#686767] text-center">Cancel</span>
                    </button>

                </div>

            </div>


      </div>
    </BaseDialogue>

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

const TAB = ref('SET');
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
