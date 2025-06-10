<template>

  <div class="w-full h-fit">

    <ClientOnly fallback="Loading Chart...">

    <Carousel v-bind="config" class="rounded-2xl">
      <Slide :style="{ backgroundColor: getRandomColor() }" class=" hover:bg-[#d9d5d5] cursor-pointer h-fit sm:min-w-[160px] p-2 flex items-center justify-start rounded-2xl gap-x-2" v-for="currency in currencies" :key="currency.label">

        <!-- <img src="~/assets/img/currency/usdt.svg" class=" min-w-[50px] rounded-2xl border-4 border-white mr-4"/> -->
        <h3 class=" chrome-border flex items-center justify-center border rounded-full bg-black text-white text-center leading-none  Grotesque-Bold text-[11px] px-2 py-3.5 ">{{ currency.value }}</h3> 

        <div class="w-full flex items-center justify-between gap-8 pr-2">

            <div class="flex flex-col items-start justify-center">
              <span class="text-black Grotesque-Bold text-[13px] whitespace-nowrap">
                <span class="truncate">{{currency.label}}</span>
              </span>
              <p class="text-gray-500 Grotesque-Light dark:text-white text-[10px] md:text-xs whitespace-nowrap">
                {{currency.type =='CRYPTO'? currency.chain :currency.label}}
              </p>
            </div>

        </div>

      </Slide>
    </Carousel>

    </ClientOnly>




  </div>
      
</template>

<script setup lang="ts">


type card = {
  name:string;
  imgurl:URL;
  symbol:string;
  amount:number
}

const getRandomColor = () => {
      const colors = ['#E5DEF0', '#D6EDDA', '#F6F0D8','#e5f2fe']; // Add more colors as needed
      return colors[Math.floor(Math.random() * colors.length)];
}

const breakpoints = useBreakpoints({
  mobile: 640,
  desktop: 760
})

const itemsToShow = computed(() => {
  return breakpoints.smaller('mobile').value ? 2 : 3
})

const config = {
  // height: 190,
  itemsToShow: itemsToShow.value,
  gap: 25,
  autoplay: 1000,
  wrapAround: true,
  pauseAutoplayOnHover: false,
};



const currencies = [
    // FIAT Currencies
    {
      label: 'Nigerian Naira',
      value: 'NGN',
      chain: '',
      type: 'FIAT'
    },
    {
      label: 'US Dollar',
      value: 'USD',
      chain: '',
      type: 'FIAT'
    },
    {
      label: 'Euro',
      value: 'EUR',
      chain: '',
      type: 'FIAT'
    },
    {
      label: 'British Pound',
      value: 'GBP',
      chain: '',
      type: 'FIAT'
    },
    
    // USDC (USD Coin)
    {
      label: 'USD Coin (Arbitrum)',
      value: 'USDC',
      chain: 'ARBITRUM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Ethereum)',
      value: 'USDC',
      chain: 'ETHEREUM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Polygon)',
      value: 'USDC',
      chain: 'POLYGON',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Solana)',
      value: 'USDC',
      chain: 'SOLANA',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Optimism)',
      value: 'USDC',
      chain: 'OPTIMISM',
      type: 'CRYPTO'
    },
    {
      label: 'USD Coin (Base)',
      value: 'USDC',
      chain: 'BASE',
      type: 'CRYPTO'
    },

    // USDT (Tether)
    {
      label: 'Tether (Arbitrum)',
      value: 'USDT',
      chain: 'ARBITRUM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Ethereum)',
      value: 'USDT',
      chain: 'ETHEREUM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Polygon)',
      value: 'USDT',
      chain: 'POLYGON',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Solana)',
      value: 'USDT',
      chain: 'SOLANA',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Optimism)',
      value: 'USDT',
      chain: 'OPTIMISM',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Base)',
      value: 'USDT',
      chain: 'BASE',
      type: 'CRYPTO'
    },
    {
      label: 'Tether (Tron)',
      value: 'USDT',
      chain: 'TRON',
      type: 'CRYPTO'
    },
    {
      label: 'Bitcoin',
      value: 'BTC',
      chain: 'Bitcoin',
      type: 'CRYPTO'
    }
  ];

</script>