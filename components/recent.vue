<template>
    <div class="w-full flex flex-row items-center justify-between" v-for="transaction in recents" :key="transaction.date">
            <!-- right -->
            <div class="w-1/2 flex flex-row items-center justify-start">
              <img src="~/assets/img/send.svg" class="w-8 p-1 rounded-[50px] bg-red-300 mx-3 md:w-10" v-if="transaction.type == 'sent'"/>
              <img src="~/assets/img/receive.svg" class="w-8 p-1 rounded-[50px] bg-[#D6EDDA] mx-3 md:w-10" v-else />
              
              <div class=" w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black text-sm poppinsSemiBold truncate">
                  {{transaction.destination ? transaction.destination:transaction.source}}
                </h2>
                <p class="text-black text-[10px] md:text-xs truncate">{{transaction.description}}</p>
              </div>
            </div>
            <!-- left -->
            <div class="w-1/2 flex flex-row items-center justify-end px-4">
              <div class="w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black poppinsMedium text-sm font-bold">
                  {{transaction.type == 'sent'? '-':'+'}}{{transaction.symbol}}{{transaction.amount}}
                </h2>
                <p class="text-black poppinsRegular text-xs truncate">{{transaction.date}}</p>
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