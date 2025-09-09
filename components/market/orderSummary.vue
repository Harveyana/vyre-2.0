<template>
    <!-- <div class="h-fit"> -->

      <div  class="w-full sm:w-[300px] flex flex-col items-center justify-center rounded-2xl gap-y-3">

        <div v-if="loading" class="w-full h-full flex flex-col gap-y-4 w-full rounded-xl items-center justify-center">

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>

                <div class="flex gap-x-3 h-16 gap-y-2 w-full p-4 border rounded-xl items-center justify-center">
                  <div class="h-12 w-12 bg-gray-300 rounded-full dark:bg-gray-600 "></div>

                  <div class="w-full flex flex-col items-start gap-y-2 ">
                    <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-40"></div>
                    <div class="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-20"></div>
                  </div>
                </div>
                
        </div>

        <div v-else class="w-full flex flex-col items-center justify-center rounded-2xl gap-y-3">

          <div class="w-full flex items-start justify-between ">
            
            <div class="flex items-center justify-center gap-x-2">
              <AvatarRoot class="inline-flex self-end h-10 min-w-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle">
                  <AvatarImage
                    class="h-full w-full rounded-[inherit] object-cover"
                    :src="order?.user?.photoUrl"
                    :alt="order?.user?.firstName"
                  />
                  <AvatarFallback
                    class="text-black leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                    :delay-ms="600"
                  >
                  {{order?.user?.firstName.charAt(0)}}{{order?.user?.lastName.charAt(0)}}
                  </AvatarFallback>
              </AvatarRoot>
              <div class="flex flex-col items-start justify-center">
                <h3 class="Grotesque-Regular text-black text-[13px]">{{order?.user?.firstName}} {{order?.user?.lastName}} </h3>
                <span v-if="order" class="Grotesque-Light text-black text-[10px]">{{timeAgo(order?.createdAt as string)}}</span>
              </div>
            </div>

            <button @click="$emit('close')">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" fill="#FAFAFA"/>
                <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="18.75" stroke="#F2F2F2" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5581 14.5581C14.8021 14.314 15.1979 14.314 15.4419 14.5581L20 19.1161L24.5581 14.5581C24.8021 14.314 25.1979 14.314 25.4419 14.5581C25.686 14.8021 25.686 15.1979 25.4419 15.4419L20.8839 20L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L20 20.8839L15.4419 25.4419C15.1979 25.686 14.8021 25.686 14.5581 25.4419C14.314 25.1979 14.314 24.8021 14.5581 24.5581L19.1161 20L14.5581 15.4419C14.314 15.1979 14.314 14.8021 14.5581 14.5581Z" fill="#868080"/>
              </svg>
            </button>

          </div>


          <div class="w-full flex items-center justify-between p-3.5 border rounded-2xl">

            <div class="w-fit flex items-center justify-center gap-x-1">

                <div>
                  <div v-if="order?.type =='BUY'">
                    <img v-if="order?.pair?.quoteCurrency.type ==='CRYPTO'" :src="order?.pair?.quoteCurrency.imgUrl" class="w-10 rounded-full"/>
                    <h3 v-else class="text-[20px] ">{{ order?.pair?.quoteCurrency?.flagEmoji }}</h3>
                  </div>

                  <div v-else>
                    <img v-if="order?.pair?.baseCurrency.type ==='CRYPTO'" :src="order?.pair?.baseCurrency.imgUrl" class="w-10 rounded-full"/>
                    <h3 v-else class="text-[60px] ">{{ order?.pair?.baseCurrency?.flagEmoji }}</h3>
                  </div>
                </div>

                <div class="flex flex-col items-center jsutify-center">
                    <h2 class="text-[12px] text-[#707070]">
                      From
                    </h2>
                    <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                      {{order?.type =='BUY'? order?.pair?.quoteCurrency?.ISO : order?.pair?.baseCurrency?.ISO}}
                    </h2>
                </div>

            </div>

            <svg class=" border rounded-full" xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="black" d="M12.984 15a1 1 0 0 0 1.848.53l2.688-2.687a1 1 0 0 0-1.415-1.414l-1.12 1.12V5a1 1 0 0 0-2 0zm-1.969-6a1 1 0 0 0-1.848-.53L6.48 11.157a1 1 0 1 0 1.414 1.414l1.121-1.12V19a1 1 0 1 0 2 0z"/></svg>

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
                <h2 class="text-[12px] text-[#707070]">
                  To
                </h2>
                <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                  {{order?.type =='BUY'? order?.pair?.baseCurrency ?.ISO : order?.pair?.quoteCurrency?.ISO}}
                </h2>
              </div>
            </div>

          </div>
            



          <div class="w-full flex flex-col items-start justify-between sm:justify-center gap-y-3 border-t px-3.5 py-2">

            <div class="w-full flex items-center justify-between">
              <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                Order Type
              </h2>

              <span class="text-black text-[12px] text-[#707070] lowercase">
                {{order?.type}}
              </span>
            </div>

            <div class="w-full flex items-center justify-between">
              <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                Status
              </h2>

              <span class="text-black text-[12px] text-[#707070] lowercase">
                {{order?.status}}
              </span>
            </div>

            <div class="w-full flex items-center justify-between">
              <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                Reference
              </h2>

              <span class="text-black text-[12px] text-[#707070] lowercase">
                {{order?.id}}
              </span>
            </div>

            <div class="w-full flex items-center justify-between">
              <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                Amount
              </h2>

              <span class="text-black text-[12px] text-[#707070] lowercase">
                {{order?.amount}}
              </span>
            </div>

            <div class="w-full flex items-center justify-between">
              <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                Processed
              </h2>

              <span class="text-black text-[12px] text-[#707070] lowercase">
                {{order?.amountProcessed}}
              </span>
            </div>

            <div class="w-full flex items-center justify-between">
              <h2 class="Grotesque-Regular text-[13px] text-[#111111]">
                Percentage Processed
              </h2>

              <span class="text-black text-[12px] text-[#707070] lowercase">
                {{order?.percentageProcessed}}%
              </span>
            </div>
        
          </div>


          <div class="w-full flex flex-col items-start justify-between sm:justify-center sm:gap-x-16 gap-y-1 border px-4 sm:px-8 rounded-2xl py-2">

              <p class="Grotesque-Regular text-[16px] text-[#737373]">
                Amount
              </p>
              <div class="flex flex-col items-start justify-center">
              
                <div class="w-full flex items-center justify-center gap-x-2">
                  <input @input="invalidAmount = false" v-model="entry" :class="invalidAmount ? 'border border-red-500 bg-red-200':'border-none bg-gray-200'" class="w-48 focus:outline-none focus:ring-0 border-none shadow-none rounded-xl text-black Grotesque-Bold text-2xl"  type="number" id="numberInput" name="numberInput" pattern="[0-9]*" inputmode="numeric" />
                  <img :src="wallet?.imgurl" class="w-14 rounded-full"/>
                </div>

                <div class="ml-2 mt-1">
                  <span v-if="!loading" class="loading text-black text-center">~ ₦ {{wallet?.availableBalance}} {{wallet?.currency}}</span>
                  <ProgressSpinner v-else class="" style="width: 20px; height: 20px" strokeWidth="8" fill="#ffff"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" 
                  />
                </div>

              </div>
            


          </div>


        </div>

        

        <div class="w-full flex items-center justify-center gap-x-2 mt-6" >

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

        </div>

        



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
  const { getOrder, processOrder} = useOrderStore();

  const { loading } = storeToRefs(useOrderStore()); // make authenticated state reactive with storeToRefs

  const showLoader = ref(false)
  const invalidAmount = ref(false)
  function timeAgo(timestampString:string) {
    const timestamp = new Date(timestampString);
    return formatDistanceToNow(timestamp, { addSuffix: true });
  }

  const entry = ref<number>(0.00)
  

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

  const order = ref<Order>()
  
  const wallet = ref<any>()

  const quote = computed(() => (entry.value! * order.value?.price!).toFixed(0))

  const maxAmount = computed(() => (
    order.value?.type === "BUY"
    ? (order.value?.amount - order.value?.amountProcessed) / order.value?.price // User is sending base, calculate quote amount
    : (order.value?.amount! - order.value?.amountProcessed!) * order.value?.price!
  ));

  // const invalidAmount = computed(() => (
  //   wallet.value?.availableBalance! <= entry.value! || maxAmount.value < entry.value ? true : false
  // ))

  const props = defineProps({
    orderId: String,
  });

  const {orderId} = props

  const route = useRouter()

  const emit = defineEmits(['next','submit','close'])  // Declare Events


  const fetchOrder = async()=>{
    const result = await getOrder(orderId as string)
    
      console.log(result)
      if(result?.success){
        console.log(result?.value)
        order.value = result?.order
      }
  }

  const fetchWallet = async()=>{
    const result = await getWalletbyName(order.value?.type! === 'BUY'? order.value?.pair.base as string : order.value?.pair.quote as string)
      console.log(result)
      if(result?.success){
        console.log(result)
        wallet.value = result?.wallet
      }
  }

  

  // watch(() => entry.value, async(newvalue, oldvalue) => {
  //   wallet.value?.availableBalance! <= entry.value! || maxAmount.value < entry.value ? invalidAmount.value = true : invalidAmount.value = false
  // });

  const submitAmount = ()=>{
    if(wallet.value?.availableBalance! <= entry.value! || maxAmount.value < entry.value){
      return invalidAmount.value = true
    }
    // emit('submit', orderType == 'BUY'? quote.value : entry.value)
    toast.promise(() => new Promise(async(resolve,reject) =>{
        const processed = await processOrder({amount:entry.value, orderId:order.value?.id!})
        if (processed.success) {
          resolve({msg:processed.msg})
          // emit('verified', verified?.userId)
        }else{
          reject({msg:processed.msg})
          // $toast.error(verified.msg)
        }
      }), 
      {
        loading: 'Processing Order',
        success: (data: any) => {
          // emit('close')
          return data.msg
        },
        error: (data: any) => {return data.msg}
      })
  }

  onMounted(async()=>{
    await fetchOrder()
    await fetchWallet()
  })


</script>
