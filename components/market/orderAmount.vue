<template>
    <div class="h-fit ">

      <div  class="w-full border flex flex-col items-center justify-center sm:px-4 rounded-2xl sm:shadow-md py-3 gap-y-3 bg-gray-200">

        <div class="w-full relative flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 gap-y-1 border px-4 sm:px-6 rounded-2xl py-2 bg-white/60">

          <!-- <p class="Grotesque-Regular text-[16px] text-[#737373] self-end">
            You <span class="lowercase">{{ orderType }}</span>
          </p> -->

          <div class=" flex flex-col items-start justify-center">
           
            <div class="w-full flex items-center justify-center gap-x-2">
              <img :src="baseWallet?.imgurl" class="max-w-8 w-8 rounded-full"/>
              <input 
                v-model="entry"
                :class="insufficient ? 'border border-red-500 bg-red-200' : 'border-none'"
                class="w-36 sm:w-42 rounded-xl focus:outline-none focus:ring-0 border-none shadow-none text-black Grotesque-Bold text-2xl appearance-none"
                type="number"
                placeholder="0.00"
                id="numberInput"
                name="numberInput"
                pattern="[0-9]*"
                inputmode="numeric"
              />
            </div>

            <p class="absolute right-6 top-2 Grotesque-Regular text-[14px] text-[#737373]">
              You <span class="lowercase">{{ orderType }}</span>
            </p>

            <div class="ml-2 mt-1">
              <span v-if="!loading" class="loading text-black text-center text-[12px]">~ ₦ {{ baseWallet?.availableBalance }} {{ baseWallet?.currency }}</span>
              <ProgressSpinner v-else class="" style="width: 20px; height: 20px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />
            </div>

          </div>
          


        </div>


        <svg class="my-[-27px] z-10 p-1 rounded-full bg-white rotate-50 " xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg>

        <div class="w-full relative flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 gap-y-1 border px-4 sm:px-6 rounded-2xl py-2 bg-white/60">

          
          <div class="flex flex-col items-start justify-center mt-6">
           
            <div class="w-full flex items-center justify-center gap-x-2">
              <img :src="quoteWallet?.imgurl" class="max-w-8 w-8 rounded-full"/>
              <input v-model="quote" :class="insufficient ? 'border border-red-500 bg-red-200':'border-none'" class="w-36 sm:w-42 focus:outline-none focus:ring-0 border-none shadow-none rounded-xl text-black Grotesque-Bold text-2xl"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
            </div>

            <p class=" absolute right-6 top-2 Grotesque-Regular text-[14px] text-[#737373]">
              {{orderType == 'SELL'? 'You Get':'You Spend'}}
            </p>

            <div class="ml-2 mt-1">
              <span v-if="!loading" class="loading text-black text-center text-[12px]">~ ₦ {{quoteWallet?.availableBalance}} {{quoteWallet?.currency}}</span>
              <ProgressSpinner v-else class="" style="width: 20px; height: 20px" strokeWidth="8" fill="#ffff"
                animationDuration=".5s" aria-label="Custom ProgressSpinner" 
              />
            </div>
            

          </div>

          <div class="w-full flex items-center justify-start gap-x-2 rounded-2xl py-2">
            <div class="flex flex-col items-start justify-center">
            
              <div class="w-full flex items-center justify-center gap-x-2">
                <input v-model="rate" :class="insufficient ? 'border border-red-500':'border-none bg-gray-50'" class="w-36 sm:w-52 focus:outline-none focus:ring-0 border-none shadow-none rounded-xl text-black Grotesque-Bold text-lg"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
              </div>

            </div>

            <p class="Grotesque-Regular whitespace-nowrap text-[14px] text-[#737373]">
              At Rate 
            </p>

          </div>

          <div class="w-full flex items-center justify-start gap-x-2 ">
          
            <div class="flex items-center justify-center gap-x-2 relative">
                  
              <!-- <img :src="quoteWallet?.imgurl" class="max-w-8 w-8 rounded-full"/> -->
              <input v-model="moq" placeholder="0.00" class="w-36 sm:w-42 h-8 focus:outline-none focus:ring-0 border-none shadow-none rounded-xl text-black Grotesque-semiBold text-lg "  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
            </div>
            <BaseTooltip v-model:content="tooltip" />

            <p class=" Grotesque-Regular whitespace-nowrap text-[13px] text-[#737373]">
              MOQ (optional)
            </p>
                
          </div>
          


        </div>

        

        
          

        <!-- <div class="w-full flex items-start justify-start border rounded-2xl py-2 px-2 mt-2">
          <h2 class="text-sm truncate poppinsLight ml-3">
            <span class="poppinsSemiBold text-xs sm:text-sm">Expected Output :</span>  <span class="poppinsRegular">0.00 btc</span> 
          </h2> 

        </div> -->

        <!-- <BaseButton  class="w-full px-8 bg-gray-300 py-3 mt-4">
          <span v-if="!showLoader" class="text-[16px] poppinsLight text-black text-center">Continue</span>
          <ProgressSpinner v-else class="" style="width: 25px; height: 25px" strokeWidth="8" fill="#ffff"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" 
          />

        </BaseButton> -->

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('back')" class="w-[25%] px-8 bg-gray-300 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 160l-64 64l64 64"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"/></svg>
          </BaseButton>


          <baseButton
              @click="submitAmount()"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Submit Order
          </baseButton>

        </div>

        



        </div>
        

    </div>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import { useWalletStore } from '~/store/wallet';
  const { fetchRate} = useWalletStore();
  const { getPairWallets} = useOrderStore();

  const { loading } = storeToRefs(useOrderStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  const insufficient = ref(false)

  const entry = ref<number>()
  const moq = ref<number>()

  const rate = defineModel<number>('rate')
  const quote = computed(() => (entry.value! * rate.value!).toFixed(0))
  
  const tooltip = ref('minimum amount required for a single trade')

  const baseWallet = ref<any>()

  const quoteWallet = ref<any>()

  const props = defineProps({
    orderType: String,
    pairId: String,
  });

  const {pairId, orderType} = props

  const route = useRouter()

  const emit = defineEmits(['next','submit','back'])  // Declare Events

  // const currentRate = computed(() => (entry.value! * rate.value).toFixed(2))
  // const rate = ref(0)

  const getWallets = async()=>{
    const result = await getPairWallets(orderType!,pairId!)
    
      console.log(result)
      if(result?.success){
        console.log(result?.value)
        baseWallet.value = result?.baseWallet
        quoteWallet.value = result?.quoteWallet
      }
  }

  const getRate = async()=>{
    const result = await fetchRate(baseWallet.value?.currency as string, quoteWallet.value?.currency)
    
      console.log(result)
      if(result?.success){
        console.log(result?.value)
        rate.value = result?.rate.value
      }
  }



  watch(() => entry.value, async(newvalue, oldvalue) => {
    if(orderType == 'BUY' && quoteWallet.value.availableBalance! <= entry.value! ||
     orderType == 'SELL' && baseWallet.value.availableBalance! <= entry.value!){ 
      insufficient.value = true
    }else{
      insufficient.value = false
    }
  });

  const submitAmount = ()=>{
    // if(entry.value === 0 || insufficient.value) return
    emit('submit', {amount:entry.value,minimumAmount:moq.value})
  }

  onMounted(async()=>{
    await getWallets()
    await getRate()
  })


</script>

<style scoped>

  /* Hide arrows/spinners in Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows/spinners in Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

</style>
