<template>
    <Transition name="fade" class="w-full max-h-[45vh] h-[46vh] flex flex-col items-center justify-center gap-3 ">

          <div class="w-full h-fit overflow-y-auto flex flex-col items-start justify-center gap-1 sm:gap-y-4 bg-[#FFFFFF] shadow-md rounded-2xl p-3 ">

            <div v-if="transaction?.transferInstructions?.type === 'crypto'" class="w-full flex flex-col items-center justify-center">
              <div class="w-full flex items-center justify-center ">
                <QRCode :data="transaction?.transferInstructions?.transferWalletAddress" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[16px] sm:text-[18px] ">
                  You are sending 
                </h1>
                <h1 class="Grotesque-Regular whitespace-nowrap text-[16px] sm:text-[18px] ">
                  {{transaction?.source.sourceAmount}} {{transaction?.source.sourceCurrency.label}}<span class="text-[12px]">({{transaction?.source.sourcePaymentMethod}})</span>
                </h1>
                <!-- <h3 class="Grotesque-Light text-[12px] sm:text-[13px] whitespace-nowrap">
                  chain {{transaction?.source.sourcePaymentMethod}}
                </h3> -->
              </div>
              
            </div>

            <div v-else class="w-full flex flex-col items-center justify-center">
              <div class="w-full flex items-center justify-center relative ">
                <svg class="w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m5 15H7v-2h10zm-9-3v-3h2v3zm3 0v-3h2v3zm3 0v-3h2v3zm3-4H7V8.5L12 6l5 2.5z"/></svg>
                <h3 class=" absolute bottom-2 right-[26%] sm:right-[40%] border rounded-full bg-black text-white text-[12px] px-2 py-3 ">{{ transaction?.source.sourceCurrency.label }}</h3> 
              </div>
              <div class="flex flex-col items-center justify-center">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[16px] sm:text-[18px] ">
                  You are sending 
                </h1>
                <h1 class="Grotesque-Regular whitespace-nowrap text-[16px] sm:text-[18px] ">
                  {{transaction?.source.sourceCurrency.label}} {{parseFloat(transaction?.source.sourceAmount)}} 
                </h1>
                <!-- <h3 class="Grotesque-Light text-[12px] sm:text-[13px] whitespace-nowrap">
                  chain {{transaction?.source.sourcePaymentMethod}}
                </h3> -->
              </div>
              
            </div>
            

            <!-- <div class="w-full flex items-center">
              <div class="w-full flex flex-col items-start justify-start gap-y-1">
                <CurrencySelect :placeholder="'BNB'" :options="currencies" @update="(value:any)=>{}" />
              </div>
            </div> -->



            
            <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
              <div class="w-full sm:w-[70%] bg-[#F6F6F6] flex flex-col gap-1 items-center justify-start p-3 rounded-2xl border border-gray-400 border-dashed ">

                <div class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] text-black ">
                    Status:
                  </h1>
                  <span class="Grotesque-Light  text-[12px] sm:text-[13px] whitespace-nowrap">
                    {{transaction.transactionStatus}}
                  </span>
                </div>

                <div v-if="transaction?.transferInstructions?.type === 'fiat'" class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] text-black ">
                    Bank:
                  </h1>
                  <span class="Grotesque-Bold  text-[12px] sm:text-[13px] whitespace-nowrap">
                    {{transaction?.transferInstructions?.transferBankName}}
                  </span>
                </div>

                <div v-if="transaction?.transferInstructions?.type === 'fiat'" class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] text-black ">
                    Account Number:
                  </h1>
                  <span class="Grotesque-Bold  text-[14px] sm:text-[13px] whitespace-nowrap">
                    {{transaction?.transferInstructions?.transferNubanCode}}
                  </span>
                </div>

                <div class="w-full flex items-center justify-between">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px]">
                    Amount:
                  </h1>
                  <span class="Grotesque-Bold  text-[13px] whitespace-nowrap">
                   {{transaction?.source.sourceAmount}} {{transaction?.source.sourceCurrency.label}}
                  </span>
                </div>

                <div v-if="transaction?.transferInstructions?.type === 'crypto'" class="w-full flex items-center justify-between gap-2">
                  <span class="w-[80%] Grotesque-Light truncate text-[12px] sm:text-[13px]">
                    {{transaction?.transferInstructions?.transferWalletAddress}}
                  </span>

                  <button class="group" @click="copyItem(transaction?.transferInstructions?.transferWalletAddress)">
                    <svg class="group-hover:text-gray-400 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342c-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2"/><path fill="currentColor" d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z"/></svg>
                  </button>
                </div>

                <div v-if="transaction?.transferInstructions?.type === 'crypto'" class="w-full flex items-center justify-between ">
                  <h1 class="Grotesque-Regular whitespace-nowrap text-[14px] ">
                    Chain:
                  </h1>
                  <span class="Grotesque-Light  text-[12px] sm:text-[13px] whitespace-nowrap">
                    {{transaction?.source?.sourcePaymentMethod}}
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
  import { useOrderStore } from '~/store/order';
  import { useWalletStore } from '~/store/wallet';
  const { fetchRate} = useWalletStore();
  const { getPairWallets} = useOrderStore();

  const { loading } = storeToRefs(useOrderStore()); // make authenticated state reactive with storeToRefs

  const currencies = [
    {label:'Nigerian Naira',value:'NGN',imgUrl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/naira.png?alt=media&token=ba63da45-5f49-4f1a-83cb-9a9edb76c845'},
    {label:'USDT TRON',value:'USDT_TRON',imgUrl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/tether.png?alt=media&token=1833b80f-c85d-4c92-bd1f-b18f70e1bd83'},
    {label:'USDC',value:'USDC',imgUrl:'https://firebasestorage.googleapis.com/v0/b/vyre-a6527.appspot.com/o/usdc.png?alt=media&token=081f1646-7728-4adc-9aab-73ca1a55928f'}
  ]

  // const depositAddress = ref('jeshdkrhsiywehsjfhgewsdjhfkhwejhfgewjsdhf')

  // const transaction = defineModel<any>('transaction')

  const showLoader = ref(false)
  const insufficient = ref(false)

  const entry = ref<number>()
  const moq = ref<number>()

  const rate = defineModel<number>('rate')
  const quote = computed(() => (entry.value! * rate.value!).toFixed(0))
  
  const tooltip = ref('minimum amount required for a single trade')

  const copyItem = (address:string) => {
    navigator.clipboard.writeText(address);
    toast.success('Copied')
    // Show toast notification
  };

  interface Currency {
    label: string;
  }

  interface FeeDetail {
    feeAmount: string;
    feeUSDAmount: string;
  }

  interface Fees {
    feeCurrency: Currency;
    fernFee: FeeDetail;
    developerFee: FeeDetail;
  }

  interface PaymentSource {
    sourceCurrency: Currency;
    sourcePaymentMethod: string;
    sourceAmount: string;
  }

  interface PaymentDestination {
    destinationPaymentAccountId: string;
    destinationPaymentMethod: string;
    destinationCurrency: Currency;
    exchangeRate: string;
    destinationAmount: string;
  }

  interface TransferInstructions {
    type: string;
    transferPaymentMethod: string;
    transferWalletAddress: string;
    transferBankName: string;
    transferNubanCode: String;
  }

  interface Transaction {
    transactionId: string;
    customerId: string;
    transactionStatus: string;
    source: PaymentSource;
    destination: PaymentDestination;
    fees: Fees;
    createdAt: string;
    updatedAt: string;
    correlationId: string;
    transferInstructions: TransferInstructions;
  }

  const props = defineProps<{
    transaction: Transaction
  }>();

  const {transaction} = props

  const route = useRouter()

  const emit = defineEmits(['next','submit','back'])  // Declare Events

  // const currentRate = computed(() => (entry.value! * rate.value).toFixed(2))
  // const rate = ref(0)

  // const getWallets = async()=>{
  //   const result = await getPairWallets(orderType!,pairId!)
    
  //     console.log(result)
  //     if(result?.success){
  //       console.log(result?.value)
  //       baseWallet.value = result?.baseWallet
  //       quoteWallet.value = result?.quoteWallet
  //     }
  // }

  // const getRate = async()=>{
  //   const result = await fetchRate(baseWallet.value?.currency as string, quoteWallet.value?.currency)
    
  //     console.log(result)
  //     if(result?.success){
  //       console.log(result?.value)
  //       rate.value = result?.rate.value
  //     }
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
