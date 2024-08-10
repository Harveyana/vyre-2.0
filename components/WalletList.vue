<template>
    <NuxtLink href="/wallets/wallet" class="w-full flex flex-row items-center justify-between rounded-2xl hover:bg-white" v-for="wallet in wallets" :key="wallet.currency">
            <!-- right -->
            <div class="w-1/2 flex flex-row items-center justify-start">
              <img :src="wallet.imgurl" class="w-10 p-1 rounded-[50px] mx-3 md:w-16" alt="currency"/>
              
              <div class=" w-[50%] flex flex-col rounded-2xl">
                <h2 class="text-black text-lg font-bold truncate">
                  {{wallet.symbol}} {{wallet.amount}}
                </h2>
                <p class="text-black text-[10px] md:text-xs truncate">{{wallet.currency}}</p>
              </div>
            </div>
            <!-- left -->
            <div class="w-1/2 flex flex-row items-center justify-end px-4">
              <img src="~/assets/img/right-arrow.png" class="w-10 md:w-12 rounded-2xl hover:bg-gray-500 px-2" alt='transactions'/>
            </div>
          </NuxtLink>
</template>

<script setup lang="ts">

type wallet = {
  amount:number;
  currency:string;
  symbol:string;
  imgurl
}

const props = defineProps<{
    wallets: wallet[]
}>()

// let symbolMap = {
//       "USD":'$',
//       "GBP":'£',
//       "EUR":'€',
//       "NGN":'₦'
//     }


</script>