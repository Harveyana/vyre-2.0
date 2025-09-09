<template>
    <Transition name="fade" class="w-full flex flex-col items-center justify-center gap-3 ">

          <div class="w-full flex flex-col items-start justify-center gap-1 sm:gap-y-4 bg-[#FFFFFF] rounded-2xl p-3 ">

            
            <div class="w-full flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-2xl p-3">
              <div class="w-full flex flex-col gap-2 items-start justify-start ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[17px] text-gray-600 ">
                  Personal Information
                </h1>
                <div class="w-full bg-white rounded-2xl flex flex-col items-center justify-between px-3 gap-x-2 ">

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-Light whitespace-nowrap text-[14px] text-gray-400 ">
                      First Name
                    </label>
                    <input v-model="firstName" required class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="harvey ana">
                  </div>

                  <div class="w-[90%] border border-dashed border-2 border-gray-200 "></div>

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-Light whitespace-nowrap text-[14px] text-gray-400 ">
                      Last Name
                    </label>
                    <input v-model="lastName" required class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="harvey ana">
                  </div>

                  <div class="w-[90%] border border-dashed border-2 border-gray-200 "></div>

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-SemiBold whitespace-nowrap text-[14px] text-gray-400 ">
                      Email
                    </label>
                    <input v-model="email" required type="email" class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="harvey@gmail.com">
                  </div>

                  <div class="w-[90%] border border-dashed border-2 border-gray-200 "></div>

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-SemiBold whitespace-nowrap text-[14px] text-gray-400 ">
                      Phone Number
                    </label>
                    <input v-model="phoneNumber" v-mask="'+234##########'" required type="tel" class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="+234810000000">
                  </div>

                </div>
              </div>
              
            </div>

            <div v-if="order?.type =='BUY' && order?.pair?.quoteCurrency?.type =='FIAT'" class="w-full flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-2xl p-3">
              <div class="w-full flex flex-col gap-2 items-start justify-start ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[17px] text-gray-600 ">
                  Bank Details
                </h1>

                <button @click.prevent="showAddBank = true" 
                  class="w-full bg-white border-2 rounded-2xl flex flex-col items-center justify-between py-2 px-3 gap-x-2 "
                  :class="recipient && bankAccountNumber ? ' border-none' :'border border-dashed  border-black'"
                  >

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">

                    <h3 v-if="recipient && bankAccountNumber" class="Grotesque-Regular whitespace-nowrap text-[14px] text-gray-800 ">
                      {{recipient}} - {{bankAccountNumber}}
                    </h3>

                    <h3 v-else class="Grotesque-Regular whitespace-nowrap text-[16px] text-gray-500 ">
                      Click to select Bank
                    </h3>
                    
                  </div>

                  <!-- <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-Light whitespace-nowrap text-[14px] text-gray-400 ">
                      Bank Name
                    </label>
                    <input required class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="Access Bank">
                  </div> -->

                  <!-- <div class="w-[90%] border border-dashed border-2 border-gray-200 "></div> -->

                  <!-- <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-Light whitespace-nowrap text-[14px] text-gray-400 ">
                      Account Number
                    </label>
                    <input required class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="030607800500">
                  </div> -->

                </button>
              </div>
              
            </div>

            <div v-if="order?.type =='SELL' && order?.pair?.baseCurrency?.type =='CRYPTO'" class="w-full flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-2xl p-3">
              <div class="w-full flex flex-col gap-2 items-start justify-start ">
                <h1 class="Grotesque-Regular whitespace-nowrap text-[17px] text-gray-600 ">
                  Wallet Details
                </h1>
                <div class="w-full bg-white rounded-2xl flex flex-col items-center justify-between px-3 gap-x-2 ">

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">
                    <label class="Grotesque-Light whitespace-nowrap text-[14px] text-gray-400 ">
                      Wallet Address
                    </label>
                    <input required v-model="walletAddress" class="w-full border-none focus:ring-0 outline-none py-3 Grotesque-Regular rounded-xl text-gray-600 text-[14px] text-end px-3 bg-transparent placeholder-gray-400" placeholder="0x3468nbgf68bdsdvbwby...">
                  </div>

                  <!-- <div class="w-[90%] border border-dashed border-2 border-gray-200 "></div> -->

                  <div class="w-full rounded-2xl flex items-center justify-between px-3 gap-2 ">

                    <div class="w-fit flex items-center justify-center gap-x-1">

                      <div>
                          <div v-if="order?.type =='BUY'">
                            <img v-if="order?.pair?.baseCurrency.type ==='CRYPTO'" :src="order?.pair?.baseCurrency?.imgUrl" class="w-10 rounded-full"/>
                            <h3 v-else class="text-[20px] ">{{ order?.pair?.baseCurrency?.flagEmoji }}</h3>
                          </div>

                          <div v-else>
                            <img v-if="order?.pair?.quoteCurrency.type ==='CRYPTO'" :src="order?.pair?.quoteCurrency.imgUrl" class="w-10 rounded-full"/>
                            <h3 v-else class="text-[60px]">{{ order?.pair?.quoteCurrency?.flagEmoji }}</h3>
                          </div>
                      </div>
                            
                      <div class="flex flex-col items-center jsutify-center">
                            <h2 class="text-[12px] text-white">
                                To
                            </h2>
                            <h2 class="Grotesque-Regular text-[13px] text-gray-400">
                                {{order?.type =='BUY'? order?.pair?.baseCurrency ?.ISO : order?.pair?.quoteCurrency?.ISO}}
                            </h2>
                      </div>

                    </div>

                    <div>
                          <div v-if="order?.type =='BUY'">
                            <img v-if="order?.pair?.baseCurrency.isStablecoin" :src="order?.pair?.baseCurrency?.chainImgUrl" class="w-8 rounded-full"/>
                            <h3 v-if="order?.pair?.baseCurrency.isStablecoin" class="Grotesque-Regular text-[13px] text-gray-400">{{ order?.pair?.baseCurrency?.chain }}</h3>
                          </div>

                          <div v-else class="flex items-center gap-2">
                            <img v-if="order?.pair?.quoteCurrency.isStablecoin" :src="order?.pair?.quoteCurrency?.chainImgUrl" class="w-8 rounded-full"/>
                            <h3 v-if="order?.pair?.quoteCurrency.isStablecoin" class="Grotesque-Regular text-[13px] text-gray-400">{{ order?.pair?.quoteCurrency?.chain }}</h3>
                          </div>
                    </div>

                  </div>

                </div>
              </div>
              
            </div>

            <div class="w-full flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 gap-y-1 border px-4 sm:px-8 rounded-2xl py-2">

              <p class="Grotesque-Regular text-[16px] text-gray-600">
                Amount
              </p>
              <div class="flex flex-col items-start justify-center">
              
                <div class="w-full flex items-center justify-center gap-x-2">
                  <input @input="validateAmount" v-model="Amount" :class="!isAmountValid ? 'border  border-red-500 bg-red-200':'border-none bg-gray-200 focus:ring-0 focus:outline-none'" class="w-48 outline-black focus:ring-black shadow-none rounded-xl text-black Grotesque-Bold text-2xl"  type="number" name="numberInput" pattern="[0-9]*" inputmode="numeric" placeholder="0.00" />
                  <!-- <img :src="wallet?.imgurl" class="w-14 rounded-full"/> -->
                  <div>
                      <div v-if="order?.type ==='BUY'">
                        <img v-if="order?.pair?.baseCurrency.type ==='CRYPTO'" :src="order?.pair?.baseCurrency?.imgUrl" class="w-10 rounded-full"/>
                        <h3 v-else class="text-[60px] ">{{ order?.pair?.baseCurrency?.flagEmoji }}</h3>
                      </div>

                      <div v-else>
                        <img v-if="order?.pair?.quoteCurrency.type ==='CRYPTO'" :src="order?.pair?.quoteCurrency.imgUrl" class="w-10 rounded-full"/>
                        <h3 v-else class="text-[60px]">{{ order?.pair?.quoteCurrency?.flagEmoji }}</h3>
                      </div>
                  </div>
                </div>

                <div>

                  <h4 v-if="!isAmountValid" class="Grotesque-Regular text-[12px] text-red-500 ml-2 mt-1">
                    {{warning}}
                  </h4>

                  <h4 v-else class="Grotesque-Regular text-[12px] text-[#737373] ml-2 mt-1">
                    Enter {{ order?.type ==='BUY' ? `${order?.pair?.baseCurrency.name}` :`${order?.pair?.quoteCurrency.name}`}} Amount
                  </h4>

                </div>
                

                <!-- <div class="ml-2 mt-1">
                  <span v-if="!loading" class="loading text-black text-center">~ ₦ {{wallet?.availableBalance}} {{wallet?.currency}}</span>
                  <ProgressSpinner v-else class="" style="width: 20px; height: 20px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
                </div> -->

              </div>


            </div>


            <div class="w-full flex items-center justify-center gap-x-2 mt-6" >
              <button
                  @click="submitAmount()"
                    class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-3xl "
                  >
                  Initiate Order
              </button>
            </div>





            <SideLog :visible="showAddBank">

              <SelectAnonBank
                v-model:bankCode="bankCode"
                v-model:AccountNumber="bankAccountNumber"
                v-model:AccountName="recipient"

                @close="showAddBank = false"
                @submit="showAddBank = false"
              />

            </SideLog>
          
            


          </div>

    </Transition>


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import { useAuthStore } from '~/store/auth';

  const { loading, order } = storeToRefs(useOrderStore()); 

  // const { initiateSwap} = useSwapStore();
  // const { loading } = storeToRefs(useSwapStore()); // make authenticated state reactive with storeToRefs

  // const loading = defineModel<boolean>('loading');
  const showAddBank = ref(false)

  const Amount = defineModel<string>('Amount')

  const firstName = defineModel<string>('firstName')
  const lastName = defineModel<string>('lastName')
  const phoneNumber = defineModel<string>('phoneNumber')
  const email = defineModel<string>('email')

  const bankCode = defineModel<string>('bankCode')
  const bankAccountNumber = defineModel<string>('bankAccountNumber')
  const recipient = defineModel<string>('recipient')

  const walletAddress = defineModel<string>('walletAddress')



  const tooltip = ref('minimum amount required for a single trade')
  const emit = defineEmits(['next','submit','back'])  // Declare Events


  // indicators
  const showMinWarning = ref(false);
  const showMaxWarning = ref(false);
  const isAmountValid = ref(false);
  const warning = ref('');

  const AmountMinimum = ref(0.05)
  const AmountMaximum = ref(10)








  // const quote = computed(() => (entry.value! * rate.value!).toFixed(0))
  
  

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
    emit('submit')
  }


  const validateAmount = () => {
    if (!Amount.value) {
      showMinWarning.value = false;
      showMaxWarning.value = false;
      isAmountValid.value = false;
      return;
    }
                    
    const numAmount = parseFloat(Amount.value);
                    
    if (isNaN(numAmount)) {
      showMinWarning.value = false;
      showMaxWarning.value = false;
      isAmountValid.value = false;
      warning.value = 'Enter valid amount'
      return;
    }
                    
    // const cryptoInfo = cryptoData[selectedCrypto.value];
                    
    // Check if below minimum
    if (numAmount < AmountMinimum.value) {

      showMinWarning.value = true;
      showMaxWarning.value = false;
      isAmountValid.value = false;

      warning.value = 'Amount below minimum allowed'
      return;
    }
                    
    // Check if above maximum
    if (numAmount > AmountMaximum.value) {
      showMinWarning.value = false;
      showMaxWarning.value = true;
      isAmountValid.value = false;

      warning.value = 'Amount above maximum allowed'
      return;
    }
                    
    // Valid amount
    showMinWarning.value = false;
    showMaxWarning.value = false;
    isAmountValid.value = true;
                    
    // Update slider to match the input value
    // sliderValue.value = numAmount;

  };



  // onMounted(async()=>{
  //   await getWallets()
  //   await getRate()
  // })


</script>

<style scoped>


</style>
