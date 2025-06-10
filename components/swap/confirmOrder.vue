<template>
    <Transition name="fade" class="w-full flex flex-col items-center justify-center gap-3 ">

          <div class="w-full flex flex-col items-start justify-center gap-1 sm:gap-y-4 bg-[#FFFFFF] shadow-md rounded-2xl p-3 ">

            
            <div class="w-full flex flex-col items-center justify-center">
              <div class="w-full flex items-center justify-center ">
                <!-- <img src="https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/naira.png?alt=media&token=ba63da45-5f49-4f1a-83cb-9a9edb76c845" class="w-12"/> -->
                <h3 :class="{ 'piston1': loading }" class=" border rounded-full bg-black text-white text-[11px] px-2 py-3 ">{{ order.SOURCE.currency }}</h3> 

                <img class="w-20 mt-6" src="~/assets/img/icons/curved.png">
                <!-- <img src="https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/usdc.png?alt=media&token=081f1646-7728-4adc-9aab-73ca1a55928f" class="w-12"/> -->
                <h3 :class="{ 'piston2': loading }" class=" border rounded-full bg-black text-white text-[11px] px-2 py-3 ">{{ order.DESTINATION.currency }}</h3>
              </div>

              <div class="flex flex-col items-center justify-center">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[16px] sm:text-[18px] ">
                  {{parseFloat(quote.destinationAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} {{order.DESTINATION.currency}}
                </h1>
                <h3 class="Grotesque-Light text-[12px] sm:text-[13px] whitespace-nowrap">
                  {{parseFloat(quote.estimatedExchangeRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} x {{order.SOURCE.currency}} {{order.SOURCE.amount}}
                </h3>
              </div>
              
            </div>
            

            <!-- <div class="w-full flex items-center">
              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <CurrencySelect :placeholder="'BNB'" :options="currencies" @update="(value:any)=>{}" />
              </div>
            </div> -->



            
            <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
              <div class="w-full sm:w-[60%] bg-[#F6F6F6] flex flex-col gap-1 items-center justify-start p-3 rounded-2xl shadow-md">

                <div class="w-full flex items-center justify-between gap-x-2">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] text-black ">
                    Reference:
                  </h1>
                  <span class="Grotesque-Light  text-[11px] truncate">
                    {{quote.quoteId}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] text-black ">
                    Transaction Value:
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    {{order.DESTINATION.currency}} {{parseFloat(quote.destinationAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] ">
                    Rate:
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    {{parseFloat(quote.estimatedExchangeRate).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular flex items-center justify-center gap-1 whitespace-nowrap text-[14px] ">
                    Destination Amount:
                    <BaseTooltip v-model="tooltip"/>
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    {{parseFloat(quote.destinationAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}
                  </span>
                </div>
                
              </div>
              <div class="w-full sm:w-[60%] bg-[#F6F6F6] flex flex-col gap-1 items-center justify-start p-3 rounded-2xl shadow-md">

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] text-black ">
                    expiresAt:
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    {{quote.expiresAt}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] ">
                    Source:
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    {{order.SOURCE.label}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] ">
                    Destination:
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    {{order.DESTINATION.label}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] ">
                    fee:
                  </h1>
                  <span class="Grotesque-Light  text-[13px] whitespace-nowrap">
                    1.2
                  </span>
                </div>

              </div>
              
            </div>
            


          </div>

    </Transition>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useSwapStore } from '~/store/swap';
  import { useAuthStore } from '~/store/auth';

  const { initiateSwap} = useSwapStore();
  // const { loading } = storeToRefs(useSwapStore()); // make authenticated state reactive with storeToRefs

  const currencies = [
    {label:'Nigerian Naira',value:'NGN',imgUrl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/naira.png?alt=media&token=ba63da45-5f49-4f1a-83cb-9a9edb76c845'},
    {label:'USDT TRON',value:'USDT_TRON',imgUrl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/tether.png?alt=media&token=1833b80f-c85d-4c92-bd1f-b18f70e1bd83'},
    {label:'USDC',value:'USDC',imgUrl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/usdc.png?alt=media&token=081f1646-7728-4adc-9aab-73ca1a55928f'}
  ]

  const loading = defineModel<boolean>('loading');
  const insufficient = ref(false)

  const entry = ref<number>()
  const moq = ref<number>()

  const rate = defineModel<number>('rate')
  // const quote = computed(() => (entry.value! * rate.value!).toFixed(0))
  
  const tooltip = ref('minimum amount required for a single trade')

  // const baseWallet = ref<any>()

  // const quoteWallet = ref<any>()

  interface source {
    name: string;
    label: string;
    currency: string;
    chain: string;
    type: string;
    paymentAccountId: string;
    method: string;
    amount: number;

  }

  interface destination {
    name: string;
    label: string;
    currency: string;
    chain: string;
    type: string;
    paymentAccountId: string;
    method:string;
    amount: string;

  }

  interface Order {
    SOURCE: source;
    DESTINATION: destination;
  }

  interface FeeDetail {
    feeAmount: string;
    feeUSDAmount: string;
  }

  interface Fees {
    feeCurrency: string;
    fernFee: FeeDetail;
    developerFee: FeeDetail;
  }

  interface Quote {
    quoteId: string;
    expiresAt: string; // ISO 8601 datetime format
    estimatedExchangeRate: string;
    destinationAmount: string;
    fees: Fees;
  }


  const props = defineProps<{
    quote: Quote;
    order: Order;
  }>();

  const {order, quote} = props

  const route = useRouter()

  // const transaction = defineModel<any>('transaction')

  const emit = defineEmits(['next','submit','back'])  // Declare Events

  // const currentRate = computed(() => (entry.value! * rate.value).toFixed(2))
  // const rate = ref(0)

  // const initiate = async()=>{
  //   loading.value = true
  //   const result = await initiateSwap({quoteId: quote.quoteId})
    
  //   console.log(result)
  //   if(result?.success){
  //     console.log(result)
  //     transaction.value = result?.transaction
  //   }

  //   loading.value = false

  // }



  // watch(() => entry.value, async(newvalue, oldvalue) => {
  //   if(orderType == 'BUY' && quoteWallet.value.availableBalance! <= entry.value! ||
  //    orderType == 'SELL' && baseWallet.value.availableBalance! <= entry.value!){ 
  //     insufficient.value = true
  //   }else{
  //     insufficient.value = false
  //   }
  // });

  const submitAmount = ()=>{
    // if(entry.value === 0 || insufficient.value) return
    emit('submit', {amount:entry.value,minimumAmount:moq.value})
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
