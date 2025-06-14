<template>
    <Transition name="fade" class="h-fit">

      <div class="w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-3 sm:py-2">

          <div class="w-full h-fit flex flex-col items-start justify-center gap-1 sm:gap-y-4 sm:w-1/2 bg-[#FFFFFF] shadow-md rounded-2xl p-3 ">

            
            <div class="w-full flex items-center justify-between">
              <h1 class="Grotesque-Regular tex-[18px] sm:text-[20px] ">
                From:
              </h1>
              <button v-show="SOURCE.type ==='FIAT'" @click="openAccountsTab('SOURCE')" :class="{ 'attention-grabber': shouldShake }" class="max-w-48 w-48 truncate whitespace-nowrap flex items-center justify-start gap-2  Grotesque-Regular px-2 py-1 text-[12px] rounded-3xl border border-dashed border-black hover:bg-gray-200">
                <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m9 11l3 3l3-3"/></g></svg>
                {{SOURCE.name? SOURCE.name :'Select Source'}}
              </button>
            </div>

            <div class="w-full flex items-center">

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <CurrencySelect 
                  :key="`source-${SOURCE.type}`" 
                  :placeholder="0" 
                  :options="SourceCurrencies" 
                  @update="selectSourceCurrency" 
                />
              </div>


            </div>

            <div :class="{ 'border border-2 border-red-600': isInsufficient }"  class="w-full bg-[#F6F6F6] flex flex-col gap-2 sm:gap-3 items-center justify-start p-3 rounded-2xl shadow-md">
              <div class="w-full flex items-center justify-between ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[18px] ">
                  You Send:
                </h1>
               
                <button class="text-gray-300 bg-[#212528] Grotesque-Regular text-[10px] sm:text-[11px] rounded-2xl py-1 px-2">
                  MAX
                </button>

              </div>

              <input v-model="SOURCE.amount"  class="w-full text-right bg-transparent outline-none rounded-xl focus-none text-black Grotesque-Regular text-[23px] py-1 sm:text-4xl border-none focus:ring-0"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
              <div class="w-full flex items-center justify-between">
                <h1 v-if="isInsufficient" class="w-full Grotesque-Light text-[11px] sm:text-[13px] text-red-600 whitespace-nowrap flex gap-3 items-center justify-center">
                  Amount below minimum
                </h1>
                <h1 class="w-full Grotesque-Light text-[13px] whitespace-nowrap flex gap-3 items-end justify-end">
                  Available
                </h1>
              </div>
              
              
            </div>

          </div>

          <button @click="switchCurrencyTypes()" :class="{ 'loading': loadingQuote }" class=" loading-button -my-4 sm:-mx-4 bg-gray-200 hover:bg-white z-999 rounded-2xl p-2 chrome-border">
            <!-- <svg class=" border rounded-full rotate-90" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg> -->
            <svg class=" border rounded-full rotate-90 sm:rotate-0 " xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="#000" d="M5.85.854a.5.5 0 0 0-.707-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707-.707L3.7 3.997h7.79a2.5 2.5 0 0 1 2.5 2.5v2a.5.5 0 0 0 1 0v-2c0-1.93-1.57-3.5-3.5-3.5H3.7L5.85.847zM2 7.5a.5.5 0 0 0-1 0v2C1 11.43 2.57 13 4.5 13h7.79l-2.15 2.15a.5.5 0 0 0 .707.707l3-3a.5.5 0 0 0 0-.707l-3-3a.5.5 0 0 0-.707.707l2.15 2.15H4.5a2.5 2.5 0 0 1-2.5-2.5v-2z"/></svg>
            <!-- <h1 class="w-full Grotesque-Light text-[13px] whitespace-nowrap flex gap-3 items-end justify-end">
                Switch
            </h1> -->
          </button>

          <div class="w-full flex flex-col items-start justify-center gap-1 sm:gap-y-4 sm:w-1/2 bg-[#FFFFFF] shadow-md rounded-2xl p-3 ">

            <div class="w-full flex items-center justify-between">
              <h1 class="Grotesque-Regular tex-[18px] sm:text-[20px] ">
                To:
              </h1>
              <button @click="openAccountsTab('DESTINATION')" :class="{ 'attention-grabber': shouldShake }" class="max-w-48 w-48 truncate whitespace-nowrap flex items-center justify-start gap-2  Grotesque-Regular px-2 py-1 text-[12px] rounded-3xl border border-dashed border-black hover:bg-gray-200">
                <svg class="min-w-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m9 11l3 3l3-3"/></g></svg>
                {{DESTINATION.name? DESTINATION.name :'Select Destination'}}
              </button>
            </div>

            <div class="w-full flex items-center">

              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <CurrencySelect 
                  :key="`dest-${DESTINATION.type}`" 
                  :placeholder="0" 
                  :options="DestinationCurrencies" 
                  @update="selectDestinationCurrency" 
                />
              </div>


            </div>

            <div class="w-full bg-[#F6F6F6] flex flex-col gap-2 sm:gap-3 items-center justify-start p-3 rounded-2xl shadow-md">
              <div class="w-full flex items-center justify-between ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] sm:text-[18px] ">
                  You Receive:
                </h1>
               

              </div>

              <!-- <input readonly v-model="DESTINATION.amount" class="w-full bg-transparent text-right outline-none rounded-xl focus-none text-black Grotesque-Regular text-[23px] py-1 sm:text-4xl border-none focus:ring-0"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" /> -->
              <div class="w-full bg-transparent text-right outline-none rounded-xl focus-none text-black Grotesque-Regular text-[23px] py-1 px-2 sm:text-4xl border-none focus:ring-0" >
                {{ parseFloat(DESTINATION?.amount as string).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
              </div>
              <h1 class="w-full Grotesque-Light text-[13px] whitespace-nowrap flex gap-3 items-end justify-end">
                Rate: {{ quote && quote?.estimatedExchangeRate ? parseFloat(quote?.estimatedExchangeRate as string).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0.00}}
              </h1>
              
            </div>

          </div>

      </div>
        

    </Transition>

    <!-- <SideLog :visible="showFiatAccounts">

      <Accounts type="FIAT" :direction="direction" @close="showFiatAccounts = false" @submit="selectFiatAccount" />

    </SideLog>

    <SideLog :visible="showCryptoAccounts">

      <Accounts type="CRYPTO" :direction="direction" @close="showCryptoAccounts = false" @submit="selectCryptoAccount" />

    </SideLog> -->

    <client-only>
      <vue-bottom-sheet :max-width="400" ref="FiatBottomSheet">
        <Accounts 
          type="FIAT" 
          :direction="direction" 
          @close="FiatBottomSheet.close();" 
          @submit="selectFiatAccount" 
        />
      </vue-bottom-sheet>
    </client-only>

    <client-only>
      <vue-bottom-sheet :max-width="400" ref="CryptoBottomSheet">
        <Accounts 
          type="CRYPTO" 
          :direction="direction" 
          @close="CryptoBottomSheet.close()" 
          @submit="selectCryptoAccount" 
        />
      </vue-bottom-sheet>
    </client-only>

    


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
  import  "@webzlodimir/vue-bottom-sheet/dist/style.css";
  import { storeToRefs } from 'pinia';
    import { useSwapStore } from '~/store/swap';
    import { useAuthStore } from '~/store/auth';
    const { getQuote} = useSwapStore();

    // const { loading } = storeToRefs(useSwapStore());
    const { user } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

  const currencies = [
    // FIAT Currencies
    {
      label: 'Nigerian Naira',
      value: 'NGN',
      chain: '',
      type: 'FIAT'
    },
    {
      label: 'US Dollar',
      value: 'USD',
      chain: '',
      type: 'FIAT'
    },
    {
      label: 'Euro',
      value: 'EUR',
      chain: '',
      type: 'FIAT'
    },
    {
      label: 'British Pound',
      value: 'GBP',
      chain: '',
      type: 'FIAT'
    },
    
    // USDC (USD Coin)
    {
      label: 'USD Coin (Arbitrum)',
      value: 'USDC',
      chain: 'ARBITRUM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Ethereum)',
      value: 'USDC',
      chain: 'ETHEREUM',
      type: 'CRYPTO'
    },
    // {
    //   label: 'USD Coin (Polygon)',
    //   value: 'USDC',
    //   chain: 'POLYGON',
    //   type: 'CRYPTO'
    // },
    // {
    //   label: 'USD Coin (Solana)',
    //   value: 'USDC',
    //   chain: 'SOLANA',
    //   type: 'CRYPTO'
    // },
    {
      label: 'USD Coin (Optimism)',
      value: 'USDC',
      chain: 'OPTIMISM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Base)',
      value: 'USDC',
      chain: 'BASE',
      type: 'CRYPTO'
    },

    // USDT (Tether)
    {
      label: 'Tether (Arbitrum)',
      value: 'USDT',
      chain: 'ARBITRUM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Ethereum)',
      value: 'USDT',
      chain: 'ETHEREUM',
      type: 'CRYPTO'
    },
    // {
    //   label: 'Tether (Polygon)',
    //   value: 'USDT',
    //   chain: 'POLYGON',
    //   type: 'CRYPTO'
    // },
    // {
    //   label: 'Tether (Solana)',
    //   value: 'USDT',
    //   chain: 'SOLANA',
    //   type: 'CRYPTO'
    // },
    {
      label: 'Tether (Optimism)',
      value: 'USDT',
      chain: 'OPTIMISM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Base)',
      value: 'USDT',
      chain: 'BASE',
      type: 'CRYPTO'
    },
    // {
    //   label: 'Tether (Tron)',
    //   value: 'USDT',
    //   chain: 'TRON',
    //   type: 'CRYPTO'
    // },
    // {
    //   label: 'Bitcoin',
    //   value: 'BTC',
    //   chain: 'Bitcoin',
    //   type: 'CRYPTO'
    // }
  ];

  const FiatBottomSheet = ref<InstanceType<typeof VueBottomSheet>>()
  const CryptoBottomSheet = ref<InstanceType<typeof VueBottomSheet>>()

  const openFiats = () => {
    if (FiatBottomSheet.value) {
      FiatBottomSheet.value.open();
    }
  };

  const openCrypto = () => {
    if (CryptoBottomSheet.value) {
      CryptoBottomSheet.value.open();
    }
  };

  const closeFiats = () => {
    if (FiatBottomSheet.value) {
      FiatBottomSheet.value.close();
    }
  };

  const closeCrypto = () => {
    if (CryptoBottomSheet.value) {
      CryptoBottomSheet.value.close();
    }
  };

  const direction = ref('Source')
  const currencyType = ref('FIAT')

  const loadingQuote = ref(false)

  

  const showFiatAccounts = ref(false)
  const showCryptoAccounts = ref(false)

  const shouldShake = ref(false);
  const isInsufficient = ref(false)

  const triggerShake = () => {
    shouldShake.value = true;
    setTimeout(() => {
      shouldShake.value = false;
    }, 1200); // Matches animation duration
  };


  const entry = ref<number>()

  const SOURCE = reactive({
    name:'',
    label: '',
    currency: '',
    chain: '',
    type: 'CRYPTO',

    paymentAccountId:'',
    method:'',
    amount: 0

  })

  const DESTINATION = reactive({
    name:'',
    label: '',
    currency: '',
    chain: '',
    type: 'FIAT',

    paymentAccountId:'',
    method:'',
    amount: '0.00'

  })

  const SourceCurrencies = computed(() => {
    return SOURCE.type 
      ? currencies.filter(c => c.type === SOURCE.type)
      : currencies;
  });

  const DestinationCurrencies = computed(() => {
    return DESTINATION.type
      ? currencies.filter(c => c.type === DESTINATION.type)
      : currencies;
  });

  // Two-way type synchronization
  watch(() => SOURCE.type, (newType, oldType) => {
    if (newType && oldType !== undefined) {
      DESTINATION.type = newType === 'FIAT' ? 'CRYPTO' : 'FIAT';
    }
  });

  watch(() => DESTINATION.type, (newType, oldType) => {
    if (newType && oldType !== undefined) {
      SOURCE.type = newType === 'FIAT' ? 'CRYPTO' : 'FIAT';
    }
  });

  const selectSourceCurrency = (payload: typeof currencies[0]) => {
    Object.assign(SOURCE, {
      label: payload.label,
      currency: payload.value,
      chain: payload.chain,
      type: payload.type
    });
  };

  const selectDestinationCurrency = (payload: typeof currencies[0]) => {
    Object.assign(DESTINATION, {
      label: payload.label,
      currency: payload.value,
      chain: payload.chain,
      type: payload.type
    });
  };

  const selectFiatAccount = (payload:any) => {

    FiatBottomSheet.value.close()

    if(payload.currency !== SOURCE.currency && payload.currency !== DESTINATION.currency ) return toast.error('Please select Currency Account')
    showFiatAccounts.value = false

    if(SOURCE.type === "FIAT"){
      Object.assign(SOURCE, {
        paymentAccountId: payload.id,
        method: payload.method,
        name: payload.name
      });
    }

    if(DESTINATION.type === "FIAT"){
      Object.assign(DESTINATION, {
        paymentAccountId: payload.id,
        method: payload.method,
        name: payload.name
      });
    }
    
  };

  const selectCryptoAccount = (payload:any) => {

   

    if(payload.chain !== SOURCE.chain && payload.chain !== DESTINATION.chain ) return toast.error('Please select the correct Chain')
    // showCryptoAccounts.value = false
    CryptoBottomSheet.value.close()

    if(SOURCE.type === "CRYPTO"){
      Object.assign(SOURCE, {
        paymentAccountId: payload.id,
        chain:payload.chain,
        method: payload.chain,
        name: payload.name
      });
    }

    if(DESTINATION.type === "CRYPTO"){
      Object.assign(DESTINATION, {
        paymentAccountId: payload.id,
        chain:payload.chain,
        method: payload.chain,
        name: payload.name
      });
    }


    
  };


  const switchCurrencyTypes = () => {
    // Store current types
    const currentSourceType = SOURCE.type;
    const currentDestType = DESTINATION.type;
    
    // Only switch if both types are defined
    if (currentSourceType && currentDestType) {
      SOURCE.type = currentSourceType === 'FIAT' ? 'CRYPTO' : 'FIAT';
      DESTINATION.type = currentDestType === 'FIAT' ? 'CRYPTO' : 'FIAT';
      
      // Clear currency selections when switching types
      SOURCE.currency = '';
      DESTINATION.currency = '';

      SOURCE.chain = '';
      DESTINATION.chain = '';

      SOURCE.paymentAccountId ='';
      DESTINATION.paymentAccountId ='';

      SOURCE.name ='';
      DESTINATION.name ='';
    }
  };

  const openAccountsTab = (position:string)=>{
    if(position === 'SOURCE'){
      if(SOURCE.type ==='FIAT') return FiatBottomSheet.value.open();
      // if(SOURCE.type ==='CRYPTO') return showCryptoAccounts.value = true
    }

    if(position === 'DESTINATION'){
      if(DESTINATION.type ==='FIAT') return FiatBottomSheet.value.open();
      if(DESTINATION.type ==='CRYPTO') return CryptoBottomSheet.value.open();
    }
  }

  // function formatNumber(num:number) {
  //  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }


  const quote = defineModel<any>('quote')
  const order = defineModel<any>('order')

  const route = useRouter()

  const emit = defineEmits(['next','submit','back'])  // Declare Events

  // const currentRate = computed(() => (entry.value! * rate.value).toFixed(2))
  // const rate = ref(0)

  const generateQuote = async()=>{

    if (SOURCE.type === 'FIAT' && !SOURCE.paymentAccountId.trim()){ 
      triggerShake()
      openAccountsTab('SOURCE')
      // toast.error('Select your Source Account');
      return 
    }


    if (!DESTINATION.paymentAccountId.trim()){ 
      triggerShake()
      openAccountsTab('DESTINATION')
      // toast.error('Select your payment Account')
      return
    };

    if (!SOURCE.currency.trim()) return toast.error('Source currency required');
    if (!DESTINATION.currency.trim()) return toast.error('Destination currency required');


    loadingQuote.value = true
    isInsufficient.value = false
    const result = await getQuote({
      source:{
        sourcePaymentAccountId: SOURCE.paymentAccountId || undefined,
        sourceCurrency:SOURCE.currency,
        sourcePaymentMethod:SOURCE.type =='CRYPTO' ? SOURCE.chain : SOURCE.method,
        sourceAmount: String(SOURCE.amount)
      },
      destination:{
        destinationPaymentAccountId: DESTINATION.paymentAccountId,
        destinationPaymentMethod: DESTINATION.method,
        destinationCurrency: DESTINATION.currency
      }
    })
    
    console.log(result)
    if(result?.success){
      console.log(result)
      quote.value = result?.quote
      DESTINATION.amount = result?.quote?.destinationAmount;
      order.value = {SOURCE,DESTINATION}
      
    }else{
      isInsufficient.value = true
    }

    loadingQuote.value = false
  }



  const debouncedGenerateQuote = useDebounceFn(async () => {
    await generateQuote()
  }, 1000) // Adjust delay as needed (500ms here)

  // 2. Watch SOURCE.amount with debouncing
  watch(() => [
    SOURCE.amount,
    SOURCE.paymentAccountId,
    // SOURCE.type,
    SOURCE.currency,
    // SOURCE.chain,
    // DESTINATION.chain,
    DESTINATION.currency,
    DESTINATION.paymentAccountId,
    // DESTINATION.type
  ], async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      try {
        await debouncedGenerateQuote()
      } catch (error) {
        if (error instanceof Error && error.message.includes('cancelled')) {
          // Handle cancelled debounce (optional)
          console.log('Quote request cancelled due to rapid changes')
        } else {
          // Handle actual errors from generateQuote
          console.error('Quote generation failed:', error)
        }
      }
    }
  }, { immediate: false })



  const submitQuote = ()=>{
    // if(entry.value === 0 || insufficient.value) return
    emit('submit', {amount:entry.value})
  }

  // onMounted(async()=>{
  //   await getWallets()
  //   await getRate()
  // })


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
