<template>
    <!-- <NuxtLink href="/wallets/wallet" :style="{ backgroundColor: getRandomColor() }" class="hover:bg-[#d9d5d5] border-2 hover:border-black cursor-pointer w-[60%] sm:w-[28%] flex-none mx-2 p-3 sm:p-4 gap-y-4 sm:gap-y-8 flex flex-col items-start justify-between rounded-2xl" v-for="balance in props.balances" :key="balance.name">

      <div class="flex flex-col items-start justify-center">
        <span class="text-black poppinsBold text-lg sm:text-xl">
            <span class="truncate">{{balance.amount}}</span> <span class=" text-xs sm:text-sm">{{balance.symbol}}</span>
        </span>
        <span class="text-xs sm:text-sm truncate poppinsRegular">
          ₦ {{balance.amount}}
        </span>
      </div>

      <img :src=balance.imgurl class="w-11 rounded-2xl mb-4 border-4 border-white"/>
      
    </NuxtLink> -->

    <NuxtLink href="/createWallet" class="hover:bg-[#cbfeed] cursor-pointer w-full h-32 sm:h-60  p-3 sm:p-4 gap-y-4 sm:gap-y-8 flex flex-col items-center justify-center rounded-2xl">

      <div class="flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24"><path fill="black" d="M5.75 7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"/><path fill="black" fill-rule="evenodd" d="M21.188 8.004C21.126 8 21.058 8 20.988 8h-2.773C15.944 8 14 9.736 14 12c0 2.264 1.944 4 4.215 4h2.773c.07 0 .138 0 .2-.004c.923-.056 1.739-.757 1.808-1.737c.004-.064.004-.133.004-.197V9.938c0-.064 0-.133-.004-.197c-.069-.98-.885-1.68-1.808-1.737m-3.217 5.063c.584 0 1.058-.478 1.058-1.067c0-.59-.474-1.067-1.058-1.067c-.585 0-1.06.478-1.06 1.067c0 .59.475 1.067 1.06 1.067" clip-rule="evenodd"/><path fill="black" d="M21.14 8.002c0-1.181-.044-2.448-.798-3.355a3.773 3.773 0 0 0-.233-.256c-.749-.748-1.698-1.08-2.87-1.238C16.099 3 14.644 3 12.806 3h-2.112C8.856 3 7.4 3 6.26 3.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87C2 8.401 2 9.856 2 11.694v.112c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.749.748 1.698 1.08 2.87 1.238c1.14.153 2.595.153 4.433.153h2.112c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238a3.81 3.81 0 0 0 .526-.66c.45-.72.504-1.602.504-2.45l-.15.001h-2.774C15.944 16 14 14.264 14 12c0-2.264 1.944-4 4.215-4h2.773c.052 0 .103 0 .151.002" opacity="0.5"/></svg>
        <span class="text-black poppinsBold text-lg sm:text-xl">
            + <span class="truncate">Create Wallet</span>
        </span>
      </div>


    </NuxtLink>

      
</template>

<script setup lang="ts">

type card = {
  name:string;
  imgurl:URL;
  symbol:string;
  amount:number
}

const getRandomColor = () => {
      const colors = ['#E5DEF0', '#D6EDDA', '#F6F0D8']; // Add more colors as needed
      return colors[Math.floor(Math.random() * colors.length)];
}

const props = defineProps<{
    balances: card[]
}>()
</script>