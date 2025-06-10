<template>
  <div class="w-full overflow-y-scroll scroll-smooth max-h-[10rem] lg:max-h-[15rem] flex flex-col items-center justify-start rounded-2xl col-span-12 py-2 mb-2 md:mb-5 gap-y-4">

    <TableSkeleton v-if="showLoader" />

    <div v-if="!showLoader && !transactions.length" class="w-full h-full flex flex-col items-center justify-center gap-y-2">

      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path fill="#000" d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21m4.17 3.534l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.286l-3.5 1.75v9.44c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978M11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286M2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21"/></svg>

      <h1  class=" text-[23px] Grotesque-Regular font text-[#080708] font-semibold">
        No Transactions Yet
      </h1>

      <span class="text-[16px] Grotesque-Regular text-[#686767] text-center ">
        You have no transaction for now. 
      </span>

    </div>

    

    <div :class="transaction.status == 'SUCCESSFUL' ? 'border-green-500' :transaction.status == 'PENDING' ? 'border-orange-500' : 'border-red-500' " class="w-full flex flex-row items-center justify-between  border-l-4 p-2 " v-for="transaction in transactions" :key="transaction.id">
            <div class="w-1/2 flex flex-row items-center justify-start">
             
              
              <div class=" w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black dark:text-white text-sm Grotesque-SemiBold truncate">
                  {{transaction.currency}}
                </h2>
                <p class="text-black dark:text-white text-[10px] md:text-xs whitespace-nowrap">{{transaction.description}}</p>
              </div>
            </div>


            <div class="w-1/2 flex flex-row items-center justify-end px-4">
              <div class="w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black dark:text-white Grotesque-Medium text-sm font-bold">
                  {{transaction.type == 'DEBIT_PAYMENT' || transaction.type == 'FIAT_WITHDRAWAL' || transaction.type == 'EXCHANGE_SELL' ?  '-':'+'}}{{transaction.currencyl}}{{transaction.amount.toLocaleString('en-US')}}
                </h2>
                <p class="text-black dark:text-white Grotesque-Regular whitespace-nowrap text-xs ">{{timeAgo(transaction.createdAt).slice(1)}}</p>
              </div>
            </div>
    </div>

  </div>
    

</template>

<script setup lang="ts">

import { formatDistanceToNow } from 'date-fns';
import { storeToRefs } from 'pinia';
import { useWalletStore } from '~/store/wallet';
import { useAuthStore } from '~/store/auth';
const { getTransactions} = useWalletStore();


const { loading } = storeToRefs(useWalletStore());
const showLoader = ref(false)
const route = useRoute()

// type transactions = {
//   type: string;
//   source?:string;
//   destination?:string;
//   currency:string;
//   symbol:string;
//   date:string;
//   description:string;
//   amount:number
// }

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


// const props = defineProps<{
//     recents: transactions[]
// }>()

const transactions = ref<Transaction[]>([])

// let symbolMap = {
//       "USD":'$',
//       "GBP":'£',
//       "EUR":'€',
//       "NGN":'₦'
//     }

function timeAgo(timestampString:string) {
  const timestamp = new Date(timestampString);
  return formatDistanceToNow(timestamp, { addSuffix: true});
}

const fetchTransactions = async()=>{
  showLoader.value = true
  const result = await getTransactions(route.params.id as string)
  console.log(result)
  if(result.success){
    transactions.value = result.transactions
  }
  showLoader.value = false
    
}

  onMounted(async()=>{
    fetchTransactions()
  })


</script>