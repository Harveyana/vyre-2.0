<template>
  <div class=" w-full flex flex-col items-center justify-center">

    <div class="w-full flex flex-row items-center justify-between rounded-2xl py-3 pl-1 sm:pl-3 sm:pr-6 ">
            <div class="flex flex-row items-center justify-start gap-x-3">
              <p class="text-gray-500 Grotesque-Light dark:text-white text-[10px] md:text-xs whitespace-nowrap">Type</p>
            </div>

            <div class="flex flex-row items-center justify-start gap-x-3">
              <p class="text-gray-500 Grotesque-Light dark:text-white text-[10px] md:text-xs whitespace-nowrap">Date</p>
            </div>

            <div class="flex flex-row items-center justify-start gap-x-3">
              <p class="text-gray-500 Grotesque-Light dark:text-white text-[10px] md:text-xs whitespace-nowrap">Status</p>
            </div>

            <div class="flex flex-row items-center justify-start gap-x-3">
              <p class="text-gray-500 Grotesque-Light dark:text-white text-[10px] md:text-xs whitespace-nowrap">Amount</p>
            </div>
    </div>

    <div class="w-full overflow-y-scroll scroll-smooth max-h-[20rem] lg:max-h-[25rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 gap-y-2">

    <TableSkeleton v-if="showLoader" />

    <div v-if="!showLoader && !orders.length" class="w-full h-full flex flex-col items-center justify-center gap-y-2">

      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path fill="#000" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"/></svg>

      <h1  class=" text-[23px] Grotesque-Regular font text-[#080708] font-semibold">
        No Transactions Yet
      </h1>

      <span class="text-[16px] Grotesque-Regular text-[#686767] text-center ">
        You have no transaction for now. 
      </span>

    </div>

    
    <button @click="selectOrder(order)" class="w-full flex flex-row items-center justify-between bg-gray-50 hover:bg-black group rounded-2xl  py-3 pl-1 sm:pl-3 pr-2 sm:pr-6 " v-for="order in orders" :key="order.id">
            <div class="flex flex-row items-center justify-start gap-x-2">
             
              <div class="bg-[#e5f2fe] p-2 flex rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M21.5 9a6.5 6.5 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9M7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5zm-10 6a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-9l2.5 2.5L9 17.5L6.5 15z"/></svg>
              </div>

              <h3 class="hidden sm:flex text-black Grotesque-Medium text-[13px] sm:text-[15px] group-hover:text-white">Swap</h3>
            </div>

            <div class="hidden sm:flex flex-row items-center justify-start gap-x-3">
              <p class="text-gray-500 Grotesque-Light dark:text-white text-[10px] md:text-xs whitespace-nowrap">{{timeAgo(order?.createdAt)}}</p>
            </div>

            <div class="flex flex-row items-center justify-center bg-green-100 py-1 sm:py-0 px-1.5 rounded-lg">

              <span>
                  <svg class="text-green-500 " xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="2" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"/></svg>
              </span>
              <p class=" flex flex-row items-center justify-center text-green-500 sm:p-1.5 rounded-xl Grotesque-Bold text-[9px] sm:text-[12px] whitespace-nowrap">
                {{order?.status}}
              </p>
            </div>

            <div class="flex flex-col items-center justify-start gap-x-3">
              <h2 class="text-black group-hover:text-white dark:text-white Grotesque-Medium text-[12px]">
                {{order?.sourceCurrency}} {{Number(order?.sourceAmount).toLocaleString('en-US')}}
              </h2>
              <p class="sm:hidden text-gray-500 group-hover:text-white Grotesque-Light text-[10px] md:text-xs whitespace-nowrap">{{timeAgo(order?.createdAt)}}</p>
            </div>

          </button>

    

    </div>

  </div>


  <BaseDialogue :visible="showActivity">
      <div class="w-full flex flex-col h-fit lg:w-[400px] gap-y-6">
        <Activity :orderId="selectedOrder?.id!" @close="showActivity = false" />
      </div>
    </BaseDialogue>
  
    

</template>

<script setup lang="ts">

import { formatDistanceToNow } from 'date-fns';
import { storeToRefs } from 'pinia';
import { useWalletStore } from '~/store/wallet';
import { useSwapStore } from '~/store/swap';
import { useAuthStore } from '~/store/auth';
const { getSwaps} = useSwapStore();
const { loading } = storeToRefs(useSwapStore());
const showLoader = ref(false)
const route = useRoute()

const showActivity = ref(false)


interface Transaction {
  id:          string;
  walletId?:   string;
  userId:      String;
  currency:    string;
  reference?:  string;
  amount:      number;
  status:       string;
  type:        string;
  description:  string;
  createdAt:    string
}

interface Order {
  id: string;
  status: string;
  userId: string;
  createdAt: string;
  sourceCurrency: string;
  destinationCurrency: string;
  rate?: number;
  sourceAmount: number;
  destinationAmount: number;
  fee?: number
}

const selectedOrder = ref<Order>()


// const props = defineProps<{
//     recents: transactions[]
// }>()

const orders = ref<Order[]>([])

const selectOrder = (order:Order)=>{
  selectedOrder.value = order
  showActivity.value = true
}

function timeAgo(timestampString:string) {
  const timestamp = new Date(timestampString);
  return formatDistanceToNow(timestamp, { addSuffix: true});
}

const fetchOrders = async()=>{
  showLoader.value = true
  const result = await getSwaps()
  console.log(result)
  if(result.success){
    orders.value = result.swaps
  }
  showLoader.value = false
    
}

  onMounted(async()=>{
    await fetchOrders()
  })


</script>