<template>
    <div :class="transaction.type == 'received' ? 'border-green-500' : 'border-red-500' " class="w-full flex flex-row items-center justify-between  border-l-4 p-2 " v-for="transaction in recents" :key="transaction.date">
            <!-- right -->
            <div class="w-1/2 flex flex-row items-center justify-start">
             
              
              <div class=" w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black dark:text-white text-sm poppinsSemiBold truncate">
                  {{transaction.destination ? transaction.destination:transaction.source}}
                </h2>
                <p class="text-black dark:text-white text-[10px] md:text-xs truncate">{{transaction.description}}</p>
              </div>
            </div>
            <!-- left -->
            <div class="w-1/2 flex flex-row items-center justify-end px-4">
              <div class="w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black dark:text-white poppinsMedium text-sm font-bold">
                  {{transaction.type == 'sent'? '-':'+'}}{{transaction.symbol}}{{transaction.amount}}
                </h2>
                <p class="text-black dark:text-white poppinsRegular text-xs truncate">{{transaction.date}}</p>
              </div>
            </div>
          </div>
</template>

<script setup lang="ts">

type transactions = {
  type: string;
  source?:string;
  destination?:string;
  currency:string;
  symbol:string;
  date:string;
  description:string;
  amount:number
}

const props = defineProps<{
    recents: transactions[]
}>()

// let symbolMap = {
//       "USD":'$',
//       "GBP":'£',
//       "EUR":'€',
//       "NGN":'₦'
//     }


</script>