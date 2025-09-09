<template>
    <!-- <div class="h-fit"> -->

      <div  class="w-full bg-gray-150 flex flex-col justify-center items-center rounded-2xl gap-y-3 pt-24">

        <div class="w-fit flex items-center justify-center gap-2">

            <button data-aos-once="true"
              :class="TAB === 'SET' ? 'text-gray-700 bg-[#e5f2fe] Grotesque-Regular whitespace-nowrap text-[12px] sm:text-[16px] border border-dashed border-black rounded-3xl px-2 sm:px-4 py-2 sm:py-2' 
              : 'text-gray-300 bg-[#212528] rounded-3xl Grotesque-Thin py-1 px-3 sm:py-2 sm:px-4'"
            >
              {{TAB === 'SET' ? 'Set Information': '1'}}
            </button>

            <button data-aos-once="true"
              :class="TAB === 'CONFIRM' ? 'text-gray-700 bg-[#e5f2fe] Grotesque-Regular whitespace-nowrap text-[12px] sm:text-[16px] rounded-3xl px-2 sm:px-4 py-2 sm:py-2' 
              : 'text-gray-300 bg-[#212528] rounded-3xl Grotesque-Thin py-1 px-3 sm:py-2 sm:px-4'"
            >
              {{TAB === 'CONFIRM' ? 'Confirm': '2'}}
            </button>

            <button data-aos-once="true"
              :class="TAB === 'DETAILS' ? 'text-gray-700 bg-[#e5f2fe] Grotesque-Regular whitespace-nowrap text-[12px] sm:text-[16px] rounded-3xl px-2 sm:px-4 py-2 sm:py-2' 
              : 'text-gray-300 bg-[#212528] rounded-3xl Grotesque-Thin py-1 px-3 sm:py-2 sm:px-4'"
            >
              {{TAB === 'DETAILS' ? 'Details': '3'}}
            </button>

            <!-- <button class="text-gray-300 bg-[#212528] Grotesque-Thin rounded-3xl py-1 px-3 sm:py-2 sm:px-4">
              4
            </button> -->

        </div>

        <div class="w-full h-[95vh] overflow-y-auto flex flex-col items-center justify-start rounded-2xl gap-y-3 pt-12 py-24">

          



          <AnonDetails 
          v-model:Amount="DETAILS.amount"

          v-model:firstName="DETAILS.user.firstName"
          v-model:lastName="DETAILS.user.lastName"
          v-model:phoneNumber="DETAILS.user.phoneNumber"
          v-model:email="DETAILS.user.email"

          v-model:bankCode="DETAILS.bank.bankCode"
          v-model:bankAccountNumber="DETAILS.bank.accountNumber"
          v-model:recipient="DETAILS.bank.recipient"

          v-model:walletAddress="DETAILS.crypto.address"

          @submit="validateAndSubmit()"
          
          />
          <!-- <AnonTransfer/> -->



        </div>

        

        <!-- <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

          <BaseButton @click="$emit('close')" class="w-[25%] bg-gray-300 py-3">
            <h2 class="text-black text-[15px]">
              Cancel
            </h2>
          </BaseButton>


          <baseButton
              @click="submitAmount()"
                type="submit"
                class="w-[70%] py-3 bg-black  text-white text-[15px] rounded-lg "
              >
              Submit Order
          </baseButton>

        </div> -->

        



      </div>
        

    <!-- </div> -->


  </template>

  <script setup lang="ts">
  import { useDebounceFn } from '@vueuse/core'
  import { Toaster, toast } from 'vue-sonner';
  import { formatDistanceToNow } from 'date-fns';
  import { storeToRefs } from 'pinia';
  import { useOrderStore } from '~/store/order';
  import { useWalletStore } from '~/store/wallet';
  const { getWalletbyName } = useWalletStore()
  const { getOrder, processOrder,initializeAnonymous} = useOrderStore();

  const { loading, order } = storeToRefs(useOrderStore()); // make authenticated state reactive with storeToRefs


  definePageMeta({
    layout: 'order'
  })

  const TAB = ref('SET');

  const showLoader = ref(false)
  const invalidAmount = ref(false)
  function timeAgo(timestampString:string) {
    const timestamp = new Date(timestampString);
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }

  const entry = ref<number>(0.00)




  const DETAILS = reactive({
    amount:'',
    user:{
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    },
    bank:{
      bankCode:'',
      accountNumber:'',
      recipient:''
    },
    crypto:{
      address:''
    },
    orderId: order.value?.id,
    currencyId: order.value?.type ==='BUY' ? order.value?.pair?.baseCurrency?.id : order.value?.pair?.quoteCurrency?.id
  })

  interface Order {
    id: string;
    type: string;
    user:{
      firstName: string;
      lastName: string;
      photoUrl: string;
    };
    pair:{
      name: string;
      base: string;
      quote: string;
      baseWallet:{
        imgurl: string;
        currency: string;
      };
      quoteWallet:{
        imgurl: string;
        currency: string;
      };
    };
    amount: number;
    amountProcessed: number; // Amount of the order that has been filled
    percentageProcessed: number; // Percentage of the order that has been filled
    price: number;
    status: string;
    createdAt: string
  }

  // const order = ref<Order>()
  
  const wallet = ref<any>()

  const quote = computed(() => (entry.value! * order.value?.price!).toFixed(0))

  const maxAmount = computed(() => (
    order.value?.type === "BUY"
    ? (order.value?.amount - order.value?.amountProcessed) / order.value?.price // User is sending base, calculate quote amount
    : (order.value?.amount! - order.value?.amountProcessed!) * order.value?.price!
  ));


  const route = useRoute()


  const initiateTransaction = async()=>{

    toast.promise(() => new Promise(async(resolve,reject) =>{
        const result = await initializeAnonymous(DETAILS)
        if (result.success) {
          resolve({msg:result.msg})
        }else{
          reject({msg:result.msg})
        }
      }), 
      {
        loading: 'Initiating Transaction',
        success: (data: any) => {
          // emit('close')
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })
  }

  const validateDetails = () => {
    // Check required fields
    if (!DETAILS.amount) {
      toast.error('Amount is required');
      return false;
    }
    if (!DETAILS.user.firstName) {
      toast.error('First name is required');
      return false;
    }
    if (!DETAILS.user.lastName) {
      toast.error('Last name is required');
      return false;
    }
    if (!DETAILS.user.email) {
      toast.error('Email is required');
      return false;
    }
    if (!DETAILS.user.phoneNumber) {
      toast.error('Phone number is required');
      return false;
    }
    if (order.value?.type === 'BUY' && order.value?.pair?.quoteCurrency?.type =='FIAT' && !DETAILS.bank.accountNumber) {
      toast.error('Account number is required');
      return false;
    }
    if (order.value?.type ==='SELL' && order.value?.pair?.baseCurrency?.type =='CRYPTO' && !DETAILS.crypto.address) {
      toast.error('Crypto address is required');
      return false;
    }
                    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(DETAILS.user.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
                    
    // Validate amount is a positive number
    if (parseFloat(DETAILS.amount) <= 0) {
      toast.error('Amount must be greater than zero');
      return false;
    }
                    
    return true;

  };

  const validateAndSubmit = async() => {
    if (validateDetails()) {
      await initiateTransaction()
    }
  };



  // onMounted(async()=>{
  //   await fetchOrder()
  //   // await fetchWallet()
  // })


</script>
